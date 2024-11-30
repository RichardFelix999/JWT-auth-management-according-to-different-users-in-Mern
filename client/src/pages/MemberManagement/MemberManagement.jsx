import MemberCom from "./MemberCom";

const MemberManagement = () => {
  return (
    <div className="w-full h-[932px] bg-[#424242] pt-[30px] px-[50px] pb-[40px]">
      <MemberCom
        name="Stephen"
        state="Working"
        current="10000"
        expected="20000"
      />
      <MemberCom
        name="Satoshi"
        state="Working"
        current="10000"
        expected="20000"
      />
    </div>
  );
};

export default MemberManagement;
