import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const local_url = process.env.REACT_APP_URL_LOCAL
console.log(local_url);
export const personaSlice = createSlice({
  name: "persona",
  initialState: {
    persona: [],
    detalle: [],
  },
  reducers: {
    get_all(state, action) {
      console.log("Se cargaron los datos")
      return {
        ...state,
        isFetching: false,
        persona: action.payload,
      };
    },
    get_all_request(state, action) {
      console.log("se cargo")
      return {
        ...state,
        isFetching: true,
      };
    },
    get_all_failure(state, action) {
      console.log(action, "accion");
      console.log("error")
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload.message,
      };
    },
    create(state, action) {
      return {
        ...state,
        isFetchingcr: false,
        persona: action.payload,
        charge: true
        
      };
    },
    create_request(state){
      return {
        ...state,
        isFetchingcr: true,
        charge: false
      }
    },
    create_failure(state, action){
      return { 
        ...state,
        isFetchingcr: false,
        errorMessage: action.payload.message,
        charge: false
      }
    },
    remove(state, action) {
      const remove = state.persona.filter((e) => e.id === action.payload);
      return {
        ...state,
        isFetchingrm: false,
        persona: remove,
      };
    },
    remove_request(state){
      return {
        ...state,
        isFetchingrm: true,
      }
    },
    remove_failure(state, action){
      return {
        ...state,
        isFetchingrm: false,
        errorMessagerm: action.payload.message,
      }
    },
    update(state) {
      return {
        state,
        isFetchingup: false
      };
    },
    update_request(state) {
      return {
        ...state,
        isFetchingup: true,
      };
    },
    update_failured(state, action) {
      return {
        ...state,
        isFetchingup: false,
        errorMessageup: action.payload.message,
      };
    },
    get_by_id(state, action) {
      return {
        ...state,
        isFetchingid: false,
        detalle: action.payload,
      };
    },
    get_by_id_request(state) {
      return {
        ...state,
        isFetchingid: true,
      };
    },
    get_by_id_failured(state, action) {
      return {
        ...state,
        isFetchingid: false,
        errorMessageid: action.payload.message,
      };
    },
    reset_Notification(state, action) {
      return {
        ...state,
        response: action.payload
      }
    }
  },
});

export const getAll = () => {
  return async (dispatch) => {
    dispatch({ type: get_all_request });
    await axios
      .get(local_url)
      .then((response) => dispatch({ type: get_all, payload: response.data }))
      .catch((error) =>
        dispatch({ type: get_all_failure, payload: error, error: true })
      );
  };
};
export const UpdatePersona = (payload) => {
  return async (dispatch) => {
    dispatch({ type: update_request });
    await axios
      .put(`${local_url}${payload.id}/`, payload)
      .then((response) => dispatch({ type: update, payload: response.data }))
      .catch((error) =>
        dispatch({ type: update_failured, payload: error, error: true })
      );
  };
};
export const getById = (id) => {
  return async (dispatch) => {
    dispatch({ type: get_by_id_request });
    await axios
      .get(`${local_url}${id}`)
      .then((response) => {
        dispatch({ type: get_by_id, payload: response.data });
      })
      .catch((error)=> { dispatch({ type: get_by_id_failured, payload: error, error: true})});
  };
};

export const CreatePersona = (payload) => {
  return async (dispatch) => {
    console.log(payload);
    console.log("ingreso a crear persona");
    const json = await axios.post(
     `${local_url}`,
      payload
    );
    console.log(json);
    dispatch({ type: create, payload: json.data });
  };
};

export const DeletePersona = (Id) => {
  return async (dispatch) => {
    const json = await axios.delete(`${local_url}${Id}/`);
    dispatch({ type: remove, payload: json.data });
  };
};

export const resetNotification = ()=> {
  return dispatch => dispatch(resetNotification(''))
}

export const {
  get_all,
  create,
  remove,
  update,
  get_by_id,
  get_all_request,
  get_all_failure,
  update_request,
  update_failured,
  get_by_id_request,
  get_by_id_failured,
  reset_Notification
} = personaSlice.actions;
export default personaSlice.reducer;
