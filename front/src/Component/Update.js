import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { UpdatePersona } from "../redux/personaSlice";
import Notification from "../Component/Notificacion"

const Update = ({Data}) => {
  const layout={
    labelCol:{
      span: 8
    },
    wrapperCol:{
      span: 16
    }
  };
  const cargo = useSelector((state) => state.persona.isFetchingup);
  const error = useSelector((state) => state.persona.errorMessageup);
  const { Item } = Form;
  const [personaje, setPersonaje]=useState({});
  const dispatch = useDispatch()
  useEffect(()=>{
    setPersonaje({
      id: Data.id,
      nombre: Data.nombre,
      apellidos: Data.apellidos,
      hobbie: Data.hobbie,
      tipoDocumento: Data.tipoDocumento,
      documento: Data.documento
    })
  }, [Data])
  const handleChange=e=>{
    const {name, value}=e.target;
    setPersonaje({...personaje,
    [name]: value});
    console.log(personaje);
  }
  const handlesubmit = ()=> {
    console.log(personaje)
    console.log("ingreso a submit")
    dispatch(UpdatePersona(personaje))
    /* window.location.reload(true) */
  }
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      {cargo?  cargo===false? (
        null
      ): (<Notification data={{message: "Se Actualizo", type:'success'}}  />)
        
      : (<Form {...layout} onFinish={handlesubmit} onFinishFailed={onFinishFailed}>
        <Item label="Nombre">
          <Input name="nombre" onChange={handleChange} value={personaje && personaje.nombre}/>
        </Item>
      
        <Item label="Apellidos">
          <Input name="apellidos" onChange={handleChange} value={personaje && personaje.apellidos}/>
        </Item>
      
        <Item label="Hobbie">
          <Input name="hobbie" onChange={handleChange} value={personaje && personaje.hobbie}/>
        </Item>
        <Item label="Tipo De Documento">
          <Input name="tipo" onChange={handleChange} value={personaje && personaje.tipoDocumento}/>
        </Item>
        <Item label="Documento">
          <Input name="documento" onChange={handleChange} value={personaje && personaje.documento}/>
        </Item>
        <Item>
        <Button type="primary" htmlType="submit">
          Actualizar
        </Button>
        </Item>
      </Form>)}
      {error? (<div><Notification data={{message: error, type:'error'}}  /></div>): null}
    </div>
  );
};
export default Update;
