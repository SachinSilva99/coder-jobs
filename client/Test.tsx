import {useState} from "react";

type Formdata = {
  firstname: string,
  firstnameError: string | null,
  lastname: string,
  lastnameError: string | null,
  address: string,
  addressError: string | null,
}
const SignUp = () => {
  const [formData, setFormData] = useState<Formdata>({
      firstname: "",
      address: "",
      addressError: "",
      firstnameError: "",
      lastnameError: "",
      lastname: ""
    }
  );
}
