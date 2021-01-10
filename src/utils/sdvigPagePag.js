export const sdvigPagePagination = (currentPage, arrPosts) => {
  if (currentPage === 1) {
    arrPosts.length = 10;
    console.log("1page", arrPosts);
    return arrPosts;
  } else {
    // prettier-ignore
    arrPosts = arrPosts.slice((currentPage-1)*10,(currentPage*10)+1);
    console.log("diffpage", arrPosts);
    return arrPosts;
  }
};
