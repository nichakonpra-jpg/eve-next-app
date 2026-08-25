/*026730462003-7 ณิชากร ประคอง DBI*/
import Header2 from "./components/header2";
import Footer2 from "./components/footer2";

export default function MidExam() {
    return (
        <>
        <Header2/>
        <div className="mt-16 flex h-[50vh] item-center justify-center bg-cover bg-center"
             style={{ backgroundImage:`url('/image/images.jpg')` }}
             >
            <p className="text-black-400 font-bold bg-light-blue-100 text-4xl text-center
            opacity-80 p-4 rounded-lg shadow-lg">
                PetHome
            </p>
            </div>
            <Footer2/>
            </>
    );
}