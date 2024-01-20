import {FaPhone, FaUser} from "react-icons/fa";
import logo from "../../assets/logo.png";
import InputControl from "../../components/input/InputControl.tsx";
import {useForm, FormProvider, SubmitHandler} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {FaPeopleGroup} from "react-icons/fa6";
import {useEffect, useRef, useState} from "react";
import {createCompany, getAllCompanyPackages} from "../../service/company/CompanyService.ts";
import CompanyPackageCard from "../../components/cards/CompanyPackageCard.tsx";
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from "firebase/storage";
import {app} from "../../firebase/Firebase.ts";
import Input from "../../components/input/Input.tsx";
import {useLocation, useNavigate} from "react-router-dom";


interface CompanyPackage {
  _id: string,
  name: string,
  description: string,
  price: number,
  paymentMethod: string,
}


const phoneNumberRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

const schema = z.object({
  companyName: z.string()
    .min(2, {message: "company name must be more than 2 characters"})
    .max(100, {message: "company name must be less than 100 characters"}),
  companyLogo: z.string({required_error: 'Please upload logo'}).min(1, {message: 'Please upload logo'}),
  companySize: z.number().min(1, {message: "Company Size must be equal or more than 1"}),
  companyContact: z.string().regex(phoneNumberRegex, {message: "Please enter a valid number"}),
  user: z.string(),
  preferredPackage: z.string({required_error: 'Please select a package'})
})
type FormFields = z.infer<typeof schema>;

const RegisterFormCompany = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const methods = useForm<FormFields>({ mode:"onChange",
    resolver: zodResolver(schema), defaultValues: {companySize: 0},
  });
  const {errors, isLoading} = methods.formState;
  const logoFileRef = useRef(null);
  const formFields = methods.getValues();
  const [companyPackages, setCompanyPackages] = useState<CompanyPackage[]>([]);
  const [preferredCompanyPackage, setPreferredCompanyPackage] = useState<string | null>(null);
  const [logoFile, setLogoFile] = useState(undefined);
  const [logoUrl, setLogoUrl] = useState<string>();
  const watch = methods.watch();
  console.log(formFields)
  const handleUpload = (file: any) => {
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
          setLogoUrl(downloadUrl);
          methods.setValue("companyLogo", downloadUrl);
        });
      }
    );
  };
  useEffect(() => {
    getAllCompanyPackages().then(allCompanyPackages => setCompanyPackages(allCompanyPackages));
    const userId = location.state?.id;
    if (!userId) {
      /*   navigate('/');*/
    } else {
      methods.setValue('user', userId);
    }
  }, []);
  useEffect(() => {
    if (logoFile) {
      handleUpload(logoFile)
    }
  }, [logoFile]);
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log(data)
  /*  const res = await createCompany(data);
    console.log(res);*/
  }
  return (
    <div className='px-4 md:px-8 lg:px-16 my-4'>
      <div className="my-4 flex items-center justify-start ">
        <img className='' src={logo} alt=""/>
      </div>
      <h1 className='text-center font-semibold text-xl'>Company</h1>
      <div className='flex  items-center justify-center'>
        <FormProvider {...methods} >
          <form onSubmit={methods.handleSubmit(onSubmit)}
                className='flex flex-col items-center justify-center flex-wrap w-full min-w-[250px]'>
            <input
              onChange={(e) => setLogoFile(e.target.files[0])}
              className="hidden"
              type="file"
              accept="image/*"
              ref={logoFileRef}
            />
            <div className=' rounded-full h-96 w-96 cursor-pointer'>
              <img
                onClick={() => logoFileRef.current?.click()}
                className=' h-60 w-60 rounded-full '
                src={logoUrl || "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg"}
                alt="img"/>
              {errors.companyLogo && (<div className='text-red-500'>{errors.companyLogo.message}</div>)}

            </div>
            <div className={'w-full flex flex-col md:flex-row gap-12 justify-between'}>
              <div className='w-full'>
                <InputControl name={'companyName'} label={'Company Name'} type={'text'} placeholder={'company name'}
                              icon={<FaUser/>}/>
                {errors.companyName && (<div className='text-red-500'>{errors.companyName.message}</div>)}

                <InputControl name={'companyContact'} label={'Company Contact'} type={'text'}
                              placeholder={'company contact +94*********'}
                              icon={<FaPhone/>
                              }/>
                {errors.companyContact && (<div className='text-red-500'>{errors.companyContact.message}</div>)}

                <div className='flex  items-center w-full my-4'>
                  <Input name={'companySize'} label={'Company Size'} type={'number'}
                         placeholder={'company size'} onChange={(e) => {
                    const number: number = parseFloat(e.target.value);
                    methods.setValue('companySize', number)
                  }}
                         icon={<FaPeopleGroup/>}
                  />

                </div>
                {errors.companySize && (<div className='text-red-500'>{errors.companySize.message}</div>)}
              </div>
              <div className={'w-full flex flex-col gap-4'}>
                <p className='my-4'>Select your preferred package</p>
                {errors.preferredPackage && (<div className='text-red-500'>{errors.preferredPackage.message}</div>)}

                {companyPackages.map(p => (
                  <CompanyPackageCard selected={preferredCompanyPackage === p._id}
                                      onSelectPackage={() => {
                                        setPreferredCompanyPackage(p._id)
                                        methods.setValue("preferredPackage", p._id);
                                      }}
                                      _id={p._id} name={p.name} description={p.description} price={p.price}
                                      paymentMethod={p.paymentMethod}/>))}
              </div>
            </div>
            <button disabled={isLoading} type={'submit'}
                    className='bg-slate-400 px-8 py-4 text-white my-4 rounded-md hover:opacity-80 active:opacity-50 mt-8 mb-2'>
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
            {errors.root && (<div className='text-red-500'>{errors.root.message}</div>)}
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default RegisterFormCompany;
