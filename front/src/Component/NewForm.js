import React, { useState } from "react";
import { Button, Checkbox, Form, Input} from "antd";
import { useDispatch } from "react-redux";
import { CreatePersona } from "../redux/personaSlice";
const NewForm = () => {
/*   const onFinish = (values) => {
    console.log("Success:", values);
  }; */
  const dispatch = useDispatch();
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [input, setInput] = useState({
    nombre: "",
    apellidos: "",
    tipoDocumento: "",
    hobbie: "",
    documento: ""
  })
  const handlesubmit = ()=> {
    console.log(input)
    console.log("ingreso a submit")
    dispatch(CreatePersona(input))
    window.location.reload(true)
  }
  const handleChange = (e)=> {
    setInput({ ...input, [e.target.name]: e.target.value })
  }
  return (
    <>
        <Form

name="basic"
labelCol={{
  span: 8,
}}
wrapperCol={{
  span: 16,
}}
initialValues={{
  remember: true,
}}
onFinish={handlesubmit}
onFinishFailed={onFinishFailed}
autoComplete="off"
>
<Form.Item
  label="Nombre"
  name="Nombre"
  rules={[
    {
      required: true,
      message: "Por Favor Ingrese El Nombre!",
    },
  ]}
>
  <Input placeholder="Nombre" name="nombre" value={input.nombre} onChange={(e)=> handleChange(e)}/>
</Form.Item>

<Form.Item
  label="Apellido"
  name="Apellido"
  rules={[
    {
      required: true,
      message: "Por Favor Ingrese el apellido!",
    },
  ]}
>
  <Input placeholder="Apellido" name="apellidos" value={input.apellidos} onChange={(e)=> handleChange(e)}/>
</Form.Item>

<Form.Item
  label="Documento"
  name="Documento"
  rules={[
    {
      required: true,
      message: "Por Favor Ingrese El Numero De Documento!",
    },
  ]}
>
  <Input placeholder="Documento" name="documento" value={input.documento} onChange={(e)=> handleChange(e)}/>
</Form.Item>

<Form.Item
  label="Hobbie"
  name="Hobbie"
  rules={[
    {
      required: true,
      message: "Por Favor Ingrese El Hobbie!",
    },
  ]}
>
  <Input placeholder="Hobbie" name="hobbie" value={input.hobbie} onChange={(e)=> handleChange(e)}/>
</Form.Item>

<Form.Item
  label="TipoDocumento"
  name="TipoDocumento"
  rules={[
    {
      required: true,
      message: "Por Favor Ingrese El Tipo De Documento!",
    },
  ]}
>
  <Input placeholder="Tipo Documento" name="tipoDocumento" value={input.tipoDocumento} onChange={(e)=> handleChange(e)}/>
</Form.Item>
<br></br>
<Form.Item
  wrapperCol={{
    offset: 8,
    span: 16,
  }}
>
  <Button type="primary" htmlType="submit"  style={{ marginRight: '20px'}}>
    Crear
  </Button>
  <Button type="primary" href={'/'}>Salir</Button>
</Form.Item>
</Form>

    </>

  );
};
export default NewForm;
