import Input from "../../../components/input/Input.tsx";
import ReactQuill from 'react-quill';
import {FaMoneyBill, FaSuitcase} from "react-icons/fa";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {z} from "zod";
import {useLocation, useNavigate} from "react-router-dom";
import {zodResolver} from "@hookform/resolvers/zod";
import InputControl from "../../../components/input/InputControl.tsx";
import {createRequest} from "../../../service/request/RequestService.ts";
import Swal from "sweetalert2";
import {JobSeekerType} from "../CompanyHero.tsx";



const schema = z.object({
  jobTitle: z.string()
    .min(2, {message: "Job Title must be more than 2 characters"})
    .max(100, {message: "Job Title must be less than 100 characters"}),
  description: z.string({required_error: 'Please Enter Description'}).min(1, {message: 'Please Enter Description'}),
  jobSeeker: z.string(),
  salary: z.number().min(1, {message: "Salary must be more than 1"}),
});
type FormFields = z.infer<typeof schema>;

function MakeRequest() {
  const location = useLocation();
  const jobSeeker : JobSeekerType = location.state.jobSeeker;

  const methods = useForm<FormFields>({
    resolver: zodResolver(schema), defaultValues: {jobSeeker: jobSeeker._id},
  });
  const {errors, isLoading} = methods.formState;
  const handleReactQuil = (html: string) => {
    methods.setValue("description", html);
  };
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log(data)
    try {
      await createRequest(data);
      Swal.fire({
        icon: "success",
        title: "Request created successfully",
      });
      methods.reset();
    } catch
      (err) {
      methods.setError("root", {
        message: err as string,
      });
    }
  }

  const name = `${jobSeeker.user.fName} ${jobSeeker.user.lName}`
  return (
    <div className="px-4 md:px-8 lg:px-16 min-h-[90vh]">
      <h1 className='my-4 text-2xl font-semibold'>Make Request</h1>
      <div className='flex gap-4'>
        <Input name={'name'} label={'name'} type='text' value={name} disabled={true} optional={true}/>
        <Input name={'currentPosition'} label={'Current Position'} type='text' value={jobSeeker.currentPosition} disabled={true}
               optional={true}/>
      </div>
      <FormProvider {...methods} >
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className='flex gap-2'>
            <div className='my-4 w-full'>
              <InputControl name={'jobTitle'} label={'Job Title'} type='text' icon={<FaSuitcase/>

              }/>
              {errors.jobTitle && (<div className='text-red-500'>{errors.jobTitle.message}</div>)}
            </div>
            <div className='my-4 w-full'>
              <InputControl name={'salary'} label={'Offering Salary $ '} type='number' icon={<FaMoneyBill/>
              }/>
              {errors.salary && (<div className='text-red-500'>{errors.salary.message}</div>)}
            </div>
          </div>
          <div className="flex flex-col gap-2 my-2">
            <label className="my-2" htmlFor="description">
              Description <span className={'text-red-600'}> *</span>
            </label>
            <div className="my-2">
              <ReactQuill
                id={'description'}
                theme="snow"
                onChange={handleReactQuil}
                value={methods.getValues('description')}
              />
              {errors.description && (<div className='text-red-500'>{errors.description.message}</div>)}
            </div>
          </div>
          <button disabled={isLoading}
                  className='px-6 py-3 bg-green-500 my-2 text-white rounded-md'>{isLoading ? 'Submitting' : 'Submit'}</button>
          {errors.root && (<div className='text-red-500'>{errors.root.message}</div>)}
        </form>
      </FormProvider>

    </div>
  );
}

export default MakeRequest;
