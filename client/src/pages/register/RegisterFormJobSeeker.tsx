import logo from "../../assets/logo.png";
import {FaPhone} from "react-icons/fa";
import {z} from "zod";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import InputControl from "../../components/input/InputControl.tsx";
import {useEffect, useRef, useState} from "react";
import {Category} from "../../types/Category.ts";
import {getAllCategories} from "../../service/API_Service.ts";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import {app} from "../../firebase/Firebase.ts";
import {createJobSeeker} from "../../service/job-seeker/JobSeekerService.ts";
import {useLocation, useNavigate} from "react-router-dom";


const schema = z.object({
  category: z.string().min(1),
  subCategory: z.string().min(1),
  resume: z.string(),
  avatar: z.string(),
  gender: z.string(),
  jobSeekerContact: z.string(),
  user: z.string()
})
type FormFields = z.infer<typeof schema>;
const RegisterFormJobSeeker = () => {
  const navigate = useNavigate();
  const methods = useForm<FormFields>({
    resolver: zodResolver(schema), defaultValues: {
      category: "",
      subCategory: "",
      resume: "test.pdf",
      avatar: "",
      gender: "FEMALE",
      jobSeekerContact: "",
      user: " ",
    },
  });
  const watch = methods.watch();
  const formFields = methods.getValues();
  const {errors, isLoading} = methods.formState;
  const avatarFileRef = useRef(null);
  const location = useLocation();

  const [avatarFile, setAvatarFile] = useState(undefined);
  const [resumeFile, setResumeFile] = useState(undefined);
  const [avatarUrl, setAvatarUrl] = useState<string>();
  const [resumeUrl, setResumeUrl] = useState<string | null>(null)
  const [categories, setCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<string[]>([]);
  console.log(formFields);

  const handleUpload = (file: any, type: 'IMG' | 'PDF') => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
      },
      (error) => {
        // setFileUploadEr(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          console.log(downloadUrl);
          if (type === 'IMG') {
            setAvatarUrl(downloadUrl);
            methods.setValue("avatar", downloadUrl);
          }
          if (type === 'PDF') {
            setResumeUrl(downloadUrl);
            methods.setValue("resume", downloadUrl);
          }
          // setFileUploadEr(false);
          // setFormData({ ...formData, avatar: downloadUrl });
        });
      }
    );
  };
  useEffect(() => {
    methods.setValue('user', location.state.id);
  }, []);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const categories: Category[] = await getAllCategories();
        setCategories(categories);
        const selectedCategoryObject = categories.find(
          (category) => category.name === formFields.category
        );
        const subCategoryNames: string[] = selectedCategoryObject?.subCategories || [];
        setSubCategories(subCategoryNames);
      } catch (error) {
        console.error(error);
      }
    };

    getCategories();
  }, [watch.category]);

  useEffect(() => {
    if (avatarFile) {
      handleUpload(avatarFile, 'IMG');
    }
  }, [avatarFile]);

  useEffect(() => {
    if (resumeFile) {
      handleUpload(resumeFile, 'PDF');
    }
  }, [resumeFile]);

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const res = await createJobSeeker(data);
    if (res.statusCode == 200) {
      navigate('/login');
    }
  }
  return (
    <div className='px-4 md:px-8 lg:px-16 my-4'>
      <div className="flex items-center justify-center my-4">
        <img className='' src={logo} alt=""/>
      </div>
      <h1 className='text-center font-semibold text-xl'>Profile</h1>
      <div className='flex  items-center justify-center'>
        <FormProvider {...methods} >
          <form onSubmit={methods.handleSubmit(onSubmit)}
                className='flex items-center justify-center flex-wrap max-w-[500px] min-w-[250px]'>
            <input
              onChange={(e) => setAvatarFile(e.target.files[0])}
              className="hidden"
              type="file"
              // accept="image/*"
              ref={avatarFileRef}
            />
            <div className=' rounded-full  cursor-pointer'>
              <img
                onClick={() => avatarFileRef.current?.click()}
                className=' h-60 w-60 rounded-full '
                src={avatarUrl || "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg"}
                alt="img"/>
            </div>
            <select {...methods.register('category')}
                    className="block w-full py-2  text-sm focus:outline-none
                   border-b-2 border-slate-300 hover:border-blue-400 mt-8 mb-2">
              <option selected>Preferred Category</option>
              {categories.map(cat => <option key={cat._id} value={cat.name}>{cat.name}</option>)}
            </select>
            {errors.category && (<div className='text-red-500'>{errors.category.message}</div>)}
            <select {...methods.register('subCategory')} id="jobType"
                    className="block w-full py-2  text-sm focus:outline-none
                  border-b-2 border-slate-300 hover:border-blue-400  mt-8 mb-2">
              <option selected>Sub Category</option>
              {subCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
            {errors.subCategory && (<div className='text-red-500'>{errors.subCategory.message}</div>)}
            <div className='flex gap-4 flex-col w-full mt-8 mb-2'>
              <label htmlFor="resume">Upload your Resume</label>
              <input id='resume' type='file' accept={'application/pdf'}
                     onChange={(e) => setResumeFile(e.target.files[0])}/>
            </div>
            {errors.resume && (<div className='text-red-500'>{errors.resume.message}</div>)}
            {resumeUrl && (<object className={'w-screen h-96'}
                                   data={resumeUrl}
                                   type="application/pdf" width="100%"
                                   height="100%">
            </object>)}
            <InputControl name={'jobSeekerContact'} label={'Job Seeker Contact'} type={'text'}
                          placeholder={'job seeker contact +94*********'}
                          icon={<FaPhone/>
                          }/>
            {errors.jobSeekerContact && (<div className='text-red-500'>{errors.jobSeekerContact.message}</div>)}
            <button disabled={isLoading}
                    className='bg-slate-400 px-8 py-4 text-white my-4 rounded-md hover:opacity-80 active:opacity-50 mt-8 mb-2'>
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default RegisterFormJobSeeker;
