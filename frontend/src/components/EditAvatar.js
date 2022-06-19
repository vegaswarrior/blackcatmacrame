import React, {useState} from "react";
import {Form} from "react-bootstrap";
import Loader from "./Loader";
import Avatar from "./Avatar";
import axios from "axios";

export default function EditAvatar({avatar, setAvatar}) {
	const [uploadingAvatar, setUploadingAvatar] = useState(false);

	const uploadFileHandler = async (e) => {
		setUploadingAvatar(true);
		const file = e.target.files[0];
		const formData = new FormData();
		formData.append("image", file);

		try {
			const config = {
				headers: {
					"Content-Type": "multipart/form-data"
				}
			};
			const {data} = await axios.post("/api/upload", formData, config);
			setAvatar(data);
			setUploadingAvatar(false);
		} catch (error) {
			console.error(error);
			setUploadingAvatar(false);
		}
	};
	return (
		<Form.Group controlId="avatar">
			{uploadingAvatar ? (
				<Loader />
			) : (
				<Avatar size={"80px"} url={avatar} className={"mb-2"} />
			)}
			<Form.File id="avatar" custom>
				<Form.File.Label data-browse="Update Avatar" style={{width: "230px"}}>
					<i className="fas fa-pen"></i>
				</Form.File.Label>
				<Form.File.Input onChange={uploadFileHandler} />
			</Form.File>
		</Form.Group>
	);
}
