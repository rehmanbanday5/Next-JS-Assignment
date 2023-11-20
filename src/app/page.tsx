import Image from 'next/image';

export default function Home() {
  return (
    <div>

      <div className=" container flex justify-around bg-white   w-auto max-w-none m-14 text-center px-6 py-4">
        <div className="team-profile text-center px-6 py-4  ">
          <Image
            className="team-profile img  w-32 h-32 object-cover rounded-full"
            src={"/Sir Zia.jpeg"}
            alt={""}
            width={300}
            height={300}
          ></Image>
          <h3 className="font-bold text-lg">Sir Zia</h3>
          <p className="text-sm">CEO</p>
        </div>

        <div className=" team-profile  text-center px-6 py-4  ">
          <Image
            className="team-profile img  w-32 h-32 object-cover rounded-full"
            src={"/My Pic.jpeg"}
            alt={""}
            width={300}
            height={300}
          ></Image>
          <h3 style={{ display: "flex" }}>
            <span
              style={{
                whiteSpace: "nowrap",
                fontWeight: "bold",
                marginRight: 6,
              }}
            >
              Abdul
            </span>
            <span style={{ whiteSpace: "nowrap", fontWeight: "bold" }}>
              Rehman
            </span>
          </h3>
          <p>
            <span style={{ whiteSpace: "nowrap", marginRight: 6 }}>PIAIC</span>
            <span style={{ whiteSpace: "nowrap" }}>Student</span>
          </p>
        </div>

        <div className="team-profile text-center px-6 py-4  ">
          <Image
            className="team-profile img  w-32 h-32 object-cover rounded-full"
            src={"/usman.jpg"}
            alt={""}
            width={300}
            height={300}
          ></Image>
          <h3 className="font-bold text-lg">Sir Usman</h3>
          <p className="text-sm">Software Developer</p>
        </div>
      </div>
    </div>
  );
}

