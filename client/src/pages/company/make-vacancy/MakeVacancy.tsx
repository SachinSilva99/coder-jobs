import Input from '../../../components/input/Input.tsx';
import {FaSuitcase} from 'react-icons/fa';
import {useEffect, useState} from 'react';
import {Category} from '../../../types/Category.ts';
import {getAllCategories} from '../../../service/API_Service.ts';

export interface Vacancy {
  company: string,
  jobTitle: string,
  description: string,
  category: string,
  subCategory: string,
  jobType: string,
  modality: string,
  salary?: number,
  endingDate: Date,
  startingDate: Date,
}

function MakeVacancy() {
  const [formData, setFormData] = useState<Vacancy>({
    company: '',
    jobTitle: '',
    description: '',
    category: '',
    subCategory: '',
    jobType: '',
    modality: '',
    endingDate: new Date(),
    startingDate: new Date(),
  });
  const [categories, setCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<string[]>([]);
  useEffect(() => {
    const getCategories = async () => {
      const categories: Category[] = await getAllCategories();
      setCategories(categories);
    };
    getCategories()
      .then((r) => console.log(r))
      .catch((e) => console.error(e));
  }, []);

  const handleOnChange = (e) => {
    const {id, value} = e.target;
    setFormData({...formData, [id]: value});
    const selectedValue = e.target.value as string;
    if (e.target.id === 'category') {
      const selectedCategoryObject = categories.find(
        (category) => category.name === selectedValue
      );
      const subCategoryNames: string[] = selectedCategoryObject?.subCategories || [];
      setSubCategories(subCategoryNames);
    }
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 min-h-[90vh]">
      <h1 className="text-2xl font-semibold my-4">Make Vacancy</h1>
      <div className="my-2">
        <Input
          name={'jobTitle'}
          label={'Job Title'}
          type={'text'}
          placeholder={'Enter job title'}
          icon={<FaSuitcase/>}
          onChange={handleOnChange}
        />
        <div className="flex gap-1 flex-col md:flex-row md:gap-6">
          {/* ... */}
          <select
            id="category"
            className="block p-2 my-4 text-sm focus:outline-none border-b-2 border-slate-300"
            onChange={handleOnChange}
            value={'category'}
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
            key={'subCategory'}
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
            onChange={handleOnChange}
          >
            <option selected>Job Type</option>
            <option value="fullTime">Full Time</option>
            <option value="PartTime">Part Time</option>
            <option value="contract">Contract</option>
          </select>
          <select
            id="modality"
            className="block  p-2 my-4 text-sm focus:outline-none border-b-2 border-slate-300"
            key={'modality'}
            onChange={handleOnChange}
          >
            <option selected>Modality</option>
            <option value="inSite">In-Site</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="my-2" htmlFor="description">
            Description <span className={'text-red-600'}> *</span>
          </label>
          <textarea
            id={'description'}
            className={
              'w-full outline-none border-2 border-slate-300 min-h-[40vh] p-4'
            }
            onChange={handleOnChange}
          />
        </div>
        <div className={'flex gap-2 md:gap-8 flex-col md:flex-row'}>
          <Input
            name={'salary'}
            label={'Salary'}
            type={'number'}
            optional={true}
            onChange={handleOnChange}
          />
          <Input
            name={'startingDate'}
            label={'Starting Date'}
            type={'date'}
            placeholder={'Enter date'}
            onChange={handleOnChange}
          />
          <Input
            name={'endingDate'}
            label={'Ending Date'}
            type={'date'}
            placeholder={'Enter date'}
            onChange={handleOnChange}
          />
        </div>
        <button className={'bg-slate-400 px-6 py-3 my-4 text-white rounded-md'}>
          Create Vacancy
        </button>
      </div>
    </div>
  );
}

export default MakeVacancy;
