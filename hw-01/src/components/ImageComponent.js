import React from "react";

const ImageComponent = ({ src, alt }) => {
    return (
  <img
      src="https://scontent-dus1-1.cdninstagram.com/v/t51.82787-15/572906092_17843719185599537_5710617966550960257_n.jpg?stp=dst-jpg_e35_p720x720_tt6&_nc_cat=101&ig_cache_key=Mzc1MjI5MTI1ODcwNzcyMDYxOA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTY3OC5zZHIuQzMifQ%3D%3D&_nc_ohc=xWnz4RY9QjwQ7kNvwHL2mKR&_nc_oc=AdluinCH88td5gXQY7DeMtbW2F_9qVXK-yn6QMnZdg0R3tKmqY_z0Q7KvUka5ISojBY0wMF3LHN2GgJexS_YBXN2&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-dus1-1.cdninstagram.com&_nc_gid=xv2S8uvZpcXQgk1ZK12NgQ&oh=00_AffiRU600-2Xs8nJjjMC-ifOl0VUmUi0vKo-UU9yeFkrUw&oe=690593F1"
      alt={alt}
      style={{ width: "400px", height: "400px" }}
    />
  );
};

export default ImageComponent;
