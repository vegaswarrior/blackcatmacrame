import pkg from "cloudinary";
const cloudinary = pkg;

export default async function deleteImagesFromCloud(oldImages, newImages) {
	try {
		const newObj = newImages.reduce((acc, image) => ({[image]: true}), {});
		const imagesToDelete = oldImages.filter((image) => !newObj[image]);

		await Promise.all(
			imagesToDelete.map((image) => {
				let id = image.split("/");
				id = id[id.length - 1].split(".")[0];
				return cloudinary.uploader.destroy(id);
			})
		);
	} catch (error) {
		throw error;
	}
}
