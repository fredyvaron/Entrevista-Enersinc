import { Button, Modal, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PageUpdate from "../Page/PageUpdate";
import { DeletePersona } from "../redux/personaSlice";
import OpenNotification from "./Notificacion";
import Update from "./Update";
import moment from "moment"
import 'moment/locale/es'

const Listado = (Data) => {
  let id = 0;
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [modaldata, setmodaldata] = useState([]);
  const showModal1 = (record) => {
    setmodaldata(record)
    setIsModalOpen1(true);
  };
  const handleOk1 = () => {
    setIsModalOpen1(false);
  };
  const handleCancel1 = () => {
    setIsModalOpen1(false);
    window.location.reload(true)
  };
  console.log(Data.Data, "Data Listado");
  const columns = [
    {
      title: "Nombre",
      dataIndex: "nombre",
      key: "nombre",
    },
    {
      title: "Apellidos",
      dataIndex: "apellidos",
      key: "apellidos",
    },
    {
      title: "Documento",
      dataIndex: "documento",
      key: "documento",
    },
    {
      title: "Hobbie",
      dataIndex: "hobbie",
      key: "hobbie",
    },
    {
      title: "Tipo Documento",
      dataIndex: "tipoDocumento",
      key: "tipoDocumento",
    },
    {
      title: "Fecha Creacion",
      dataIndex: "created_date",
      key: "created_date",
      render: (record)=> {
        return (
          <div>
            <p>{moment(record.created_date).format('LLLL')}</p>
          </div>
        )
      }
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record) =>(
        <Space wrap>
        <Button type="primary" danger onClick={(e)=> { onDelete(record.id, e)}}>
          Eliminar
        </Button>
        
        <Button type="primary" onClick={() => showModal1(record.id)}>
          Editar
        </Button>

        </Space>

        
      ),
    },
    
  ];
  const dispatch = useDispatch()
  const onDelete = (key, e) => {
    e.preventDefault();
    dispatch(DeletePersona(key))
  }


 

  

  return (
    <>
      <Table dataSource={Data.Data} columns={columns}></Table>
      <Modal title="Actualizacion Persona" open={isModalOpen1} onOk={handleOk1} onCancel={handleCancel1} footer={null}>
    < PageUpdate id={modaldata}/>
    </Modal>
    </>
  );
};

export default Listado;
