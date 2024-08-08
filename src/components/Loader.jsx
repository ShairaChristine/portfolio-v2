import { Html } from '@react-three/drei';

const Loader = () => {
    return (
        <Html center>
            <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin"></div>    
        
            <div className="flex justify-center items-center h-screen">
                {/* <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-slate-900"></div> */}
                <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
        </Html>
    );
}

export default Loader;