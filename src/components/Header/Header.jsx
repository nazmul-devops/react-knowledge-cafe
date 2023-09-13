import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center container mx-auto my-8 border-b-2 pb-8'>
            <h1 className="text-4xl font-bold text-center">React Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;