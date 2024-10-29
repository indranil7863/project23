
import {create} from 'zustand'
import axios from 'axios'

const API_URL = "http://localhost:3000/api";

axios.defaults.withCredentials = true;

export const resultStore = create((set) =>({
    name: "indranil",
    error:null,
    saveResult: async(name, totalQuestion, totalScore, wrongAns, accuracy) =>{
        set({error:null});
        try{
            console.log("check point one");
            const response = await axios.post(`${API_URL}/save-result`, {name, totalQuestion, totalScore, wrongAns, accuracy});
            console.log("response:", response);
            set({name: response.data.name})
        }
        catch(error){
            set({ error: error.response.data.message })
            throw error;
        }
    }

}))