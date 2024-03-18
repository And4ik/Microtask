

import * as React from 'react';
import { useParams } from 'react-router-dom';
import { adidasArr, AdidasItem } from "./Adidas";
import { S } from "../pages/__styles";
type Props = {};

export const ModelAdidas = (props: Props) => {
    const params = useParams();
    const selectedModel:AdidasItem | undefined = adidasArr.find(item => item.id===Number(params.id))

    return (
        <div>
            {selectedModel
            ? <><h3>{selectedModel.model}</h3>
                    <h2>{selectedModel.collection}</h2>
                    <h1>{selectedModel.price}</h1>
                    <S.StyledImage src={selectedModel.picture} alt={selectedModel.model}/>
                </>
                : <h2>Такой модели не существует</h2>

            }

        </div>
    );
};
