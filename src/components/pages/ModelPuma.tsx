import React from "react";
import {useParams} from "react-router-dom";
import {pumaArr, PumaItem} from "./Puma";
import { S } from "../pages/__styles";
export const ModelPuma = () => {
    const params = useParams()
    const selectedModel: PumaItem | undefined = pumaArr.find(item => item.id === Number(params.id))
    if (!selectedModel) {
        return (
            <h3>Такой модели не существует</h3>
        )
    }
  return (
        <div>
            <h3>{selectedModel.model}</h3>
            <h2>{selectedModel.collection}</h2>
            <h1>{selectedModel.price}</h1>
            <S.StyledImage src={selectedModel.picture} alt={selectedModel.model}/>
        </div>
  )
}