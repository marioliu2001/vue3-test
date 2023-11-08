//获取静态资源路径
export const getImageUrl = (imageName) => {
    const imageUrl = new URL(`../assets/images/${imageName}`, import.meta.url);
    return imageUrl.href;
}
