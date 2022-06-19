import pkg from "cloudinary";
const cloudinary = pkg;

export default async function deleteSingleImageFromCloud(url) {
	let id = url.split("/");
	id = id[id.length - 1].split(".")[0];
	await cloudinary.uploader.destroy(id);
}
