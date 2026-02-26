import { useState } from "react";

export default function ZoomableImage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Logo Image */}
      <img
        src="https://yt3.ggpht.com/ffASxcH4ZMRTthk42DfaFVNPhEFoX5WuRjdhgjHzQcx0gsXoQFnsWEvKaTeie40NG3do7i_cH37Jvg=s1600-rw-nd-v1"
        alt="Logo"
        className="w-[60px] h-[60px] rounded-full object-cover cursor-pointer"
        onClick={() => setOpen(true)}
      />

      {/* Zoom Modal */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
          onClick={() => setOpen(false)}
        >
          <img
            src="https://yt3.ggpht.com/ffASxcH4ZMRTthk42DfaFVNPhEFoX5WuRjdhgjHzQcx0gsXoQFnsWEvKaTeie40NG3do7i_cH37Jvg=s1600-rw-nd-v1"
            alt="Logo"
            className="w-[180px] h-[180px] object-contain rounded-full"
          />
        </div>
      )}
    </>
  );
}