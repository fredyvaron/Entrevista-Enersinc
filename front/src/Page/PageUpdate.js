import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreatePersona, getById } from "../redux/personaSlice";
import { useParams } from "react-router-dom";
import Notification from "../Component/Notificacion"
import Update from "../Component/Update";
const PageUpdate = ({id}) => {
  console.log(id, "id")
  const detalle = useSelector((state) => state.persona.detalle);
  const error = useSelector((state) => state.persona.errorMessageid);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch, id]);

  console.log(detalle)

  return (
    <>
    <Update Data={detalle}/>
    {error? (<div><Notification data={{message: error, type:'error'}}  /></div>): null}

    </>
  );
};
export default PageUpdate;
