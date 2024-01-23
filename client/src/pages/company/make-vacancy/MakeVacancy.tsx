import Input from '../../../components/input/Input.tsx';
import { FaSuitcase } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Category } from '../../../types/Category.ts';
import { getAllCategories } from '../../../service/API_Service.ts';
import Cookies from 'js-cookie';
import { TOKEN } from '../../../util/TOKEN.ts';
import {
  createVacancy,
  updateVacancy,
} from '../../../service/vacancy/VacancyService.ts';
import { useLocation } from 'react-router-dom';
import ReactQuill from 'react-quill';

export interface Vacancy {
  _id?: string;
  jobTitle: string;
  description: string;
  category: string;
  subCategory: string;
  jobType: string;
  modality: string;
  salary?: number;
  endingDate: string;
  startingDate: string;
}

function MakeVacancy() {
  const location = useLocation();
  const vacancy: Vacancy = location?.state?.vacancy;
  const [formData, setFormData] = useState<Vacancy>(
    vacancy
      ? vacancy
      : {
          category: '',
          description: '',
          endingDate: '',
          jobTitle: '',
          jobType: '',
          modality: '',
          salary: 0,
          startingDate: '',
          subCategory: '',
        }
  );

  const [categories, setCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<string[]>([]);
  useEffect(() => {
    const getCategories = async () => {
      const categories: Category[] = await getAllCategories();
      setCategories(categories);
      const selectedCategoryObject = categories.find(
        (category) => category.name === formData.category
      );
      const subCategoryNames: string[] =
        selectedCategoryObject?.subCategories || [];
      setSubCategories(subCategoryNames);
    };

    getCategories()
      .then((r) => console.log(r))
      .catch((e) => console.error(e));
  }, [formData.category]);
  console.log(formData);
  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    const selectedValue = e.target.value as string;
    if (e.target.id === 'category') {
      const selectedCategoryObject = categories.find(
        (category) => category.name === selectedValue
      );
      const subCategoryNames: string[] =
        selectedCategoryObject?.subCategories || [];
      setSubCategories(subCategoryNames);
    }
  };
  const handleReactQuil = (html: string) => {
    setFormData({ ...formData, description: html });
  };

  async function submitForm() {
    if (vacancy && vacancy._id) {
      const response = await updateVacancy(
        formData,
        Cookies.get(TOKEN),
        vacancy._id
      );
      console.log(response);
    } else {
      const response = await createVacancy(formData, Cookies.get(TOKEN));
      console.log(response);
    }
  }

  return (
    <div className="px-4 md:px-8 lg:px-16 min-h-[90vh]">
      <h1 className="text-2xl font-semibold my-4">Make Vacancy</h1>
      <div className="my-2">
        <Input
          name={'jobTitle'}
          label={'Job Title'}
          type={'text'}
          value={formData.jobTitle}
          placeholder={'Enter job title'}
          icon={<FaSuitcase />}
          onChange={handleOnChange}
        />
        <div className="flex gap-1 flex-col md:flex-row md:gap-6">
          {/* ... */}
          <select
            id="category"
            className="block p-2 my-4 text-sm focus:outline-none border-b-2 border-slate-300"
            onChange={handleOnChange}
            value={formData.category}
          >
            <option value={''} key={'default'}>
              Category
            </option>
            {categories.map((category) => (
              <option key={category._id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <select
            id="subCategory"
            className="block p-2 my-4 text-sm focus:outline-none border-b-2 border-slate-300"
            value={formData.subCategory}
            onChange={handleOnChange}
          >
            <option value="" key={'subDefault'}>
              Sub Category
            </option>
            {subCategories.map((subCategory) => (
              <option key={subCategory} value={subCategory}>
                {subCategory}
              </option>
            ))}
          </select>

          <select
            id="jobType"
            className="block  p-2 my-4 text-sm focus:outline-none border-b-2 border-slate-300"
            key={'jobType'}
            value={formData.jobType}
            onChange={handleOnChange}
          >
            <option selected>Job Type</option>
            <option value="FULL_TIME">Full Time</option>
            <option value="PART_TIME">Part Time</option>
            <option value="CONTRACT">Contract</option>
          </select>
          <select
            id="modality"
            className="block p-2 my-4 text-sm focus:outline-none border-b-2 border-slate-300"
            key={'modality'}
            onChange={handleOnChange}
            value={formData.modality}
          >
            <option selected>Modality</option>
            <option value="IN_SITE">In-Site</option>
            <option value="REMOTE">Remote</option>
            <option value="HYBRID">Hybrid</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="my-2" htmlFor="description">
            Description <span className={'text-red-600'}> *</span>
          </label>
          <div className="m-2">
            <ReactQuill
              id={'description'}
              theme="snow"
              value={formData.description}
              onChange={handleReactQuil}
            />
          </div>
        </div>
        <div className={'flex gap-2 md:gap-8 flex-col md:flex-row'}>
          <Input
            name={'salary'}
            label={'Salary'}
            type={'number'}
            value={formData.salary?.toString()}
            optional={true}
            onChange={handleOnChange}
          />
          <Input
            name={'startingDate'}
            label={'Starting Date'}
            type={'date'}
            placeholder={'Enter date'}
            onChange={handleOnChange}
            value={formData.startingDate}
          />
          <Input
            name={'endingDate'}
            label={'Ending Date'}
            type={'date'}
            placeholder={'Enter date'}
            onChange={handleOnChange}
            value={formData.endingDate}
          />
        </div>
        <button
          className={'bg-slate-400 px-6 py-3 my-4 text-white rounded-md'}
          onClick={submitForm}
        >
          {vacancy ? 'Update' : 'Create Vacancy'}
        </button>
      </div>
    </div>
  );
}

export default MakeVacancy;
