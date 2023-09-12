import profile from '../images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between container mx-auto border-b-2 p-4'>
            <h1 className="text-5xl text-violet-600 font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;