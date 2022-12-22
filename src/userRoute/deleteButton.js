import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import trash from "../img/trash.png";
import { ColorRing } from "react-loader-spinner";

export default function DeleteButton({loadUrls, setLoadUrls, id}) {
  const token = JSON.parse(localStorage.getItem("token"));
  const [deleteLoading, setDeleteLoading] = useState(false);

  const config = {
    headers: {
      Authorization: `Bearer ` + token.token,
    },
  };

  async function deleteUrl(id) {
    try {
      setDeleteLoading(true);
      await axios.delete(
        `https://shortly-api-22wb.onrender.com/urls/${id}`,
        config
      );
      setLoadUrls(!loadUrls);
      setDeleteLoading(false);
    } catch (err) {
      console.log(err.response);
      setDeleteLoading(false);
    }
  }
    return(
        <>
            {deleteLoading === false ? (
                <Delete onClick={() => deleteUrl(id)}>
                  <img src={trash} alt="imgTrash" />
                </Delete>
              ) : (
                <Delete>
                  <ColorRing
                    visible={true}
                    height="130"
                    width="60"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={["black", "black", "black", "black", "black"]}
                  />
                </Delete>
              )}
        </>
    )
}
const Delete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 130px;
  height: 60px;
  background: #ffffff;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 0px 12px 12px 0px;
  border: 1px solid gray;
`;