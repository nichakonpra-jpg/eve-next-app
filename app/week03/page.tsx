import Header from "../components/header";
import Footer from "../components/footer";

export default function DBIWeek03() {
return (
    <>
    <Header/>
    <div className="mt-16 flex h-[50vh] items-center justify-center bg-cover bg-center"
         style={{ backgroundImage: `url('/images/images.jpg')` }}
         >
        <p className="text-fuchsia-400 font-bold bg-teal-100 text-4xl text-center
        opacity-70 p-4 rounded-lg shadow-lg">
            Welcome to The Council 
        </p>
    </div>
    <Footer/>
    </>
);
}