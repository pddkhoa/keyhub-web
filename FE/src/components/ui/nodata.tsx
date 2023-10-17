import img_nodata from "../../asset/nodata_outline.png";
export const Nodata = () => {
  return (
    <div className="h-80 w-full">
      <img src={img_nodata} className="object-cover w-full h-full opacity-80" />
    </div>
  );
};
