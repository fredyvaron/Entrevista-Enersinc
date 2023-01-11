import { Button, DatePicker, Col, Row, Modal, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from 'react-redux'
import { getAll } from "../redux/personaSlice"
import NewForm from "../Component/NewForm";
import Listado from "../Component/Listado";


function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const Persona = useSelector((state)=> state.persona.persona) 
  const Loading = useSelector((state)=> state.persona.isFetching)
  const error = useSelector((state) => state.persona.errorMessage);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAll())
  }, [dispatch])

  return (
    <div className="App">

            <Button type="primary" onClick={showModal}>
        Crear
      </Button>
      <Modal title="Creacion De Persona" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
< NewForm/>
      </Modal>
    
      <Row>
        <Col span={20} offset={2}>

        <Listado Data={Persona} />
        </Col>
      </Row>
      
    </div>
  );
}

export default Home;