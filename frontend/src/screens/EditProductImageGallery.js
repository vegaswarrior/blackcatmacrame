import {Image} from "react-bootstrap";
import React from "react";
import ArrowIcon from "../components/svg/icons/ArrowIcon";
import {Button} from "react-bootstrap";

const btnStyle = {
	border: "none",
	background: "transparent"
};

export default function EditProductImageGallery({imageArr, setImages}) {
	function deleteImage(url) {
		setImages((prev) => prev.filter((e) => e !== url));
	}
	function moveImageToRight(e, index) {
		e.preventDefault();
		if (index < imageArr.length - 1) {
			setImages((prev) => {
				const arr = [...prev];
				const ele = arr[index];
				arr.splice(index, 1);
				arr.splice(index + 1, 0, ele);
				return arr;
			});
		}
	}

	function moveImageToLeft(e, index) {
		e.preventDefault();
		if (index > 0) {
			setImages((prev) => {
				const arr = [...prev];
				const ele = arr[index];
				arr.splice(index, 1);
				arr.splice(index - 1, 0, ele);
				return arr;
			});
		}
	}

	return (
		<div className="d-flex flex-wrap">
			{imageArr
				? imageArr.map((image, i) => (
						<div
							key={i}
							className="d-flex justify-content-center align-items-center thumbnailContainer"
						>
							<div
								className="position-absolute d-flex justify-content-between align-items-center thumbnailControll"
								style={{width: "150px"}}
							>
								<button style={btnStyle} onClick={(e) => moveImageToLeft(e, i)}>
									<ArrowIcon
										style={{transform: "rotate(180deg)", transformOrigin: "center"}}
									/>
								</button>

								<Button
									variant="danger"
									className="btn-sm"
									onClick={() => deleteImage(image)}
								>
									<i className="fas fa-trash"></i>
								</Button>

								<button style={btnStyle} onClick={(e) => moveImageToRight(e, i)}>
									<ArrowIcon />
								</button>
							</div>
							<Image
								src={image}
								key={i}
								fluid
								style={{width: "150px", margin: "5px", objectFit: "contain"}}
							/>
						</div>
				  ))
				: null}
		</div>
	);
}
