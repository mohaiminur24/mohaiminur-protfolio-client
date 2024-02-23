

const DefaultPageWrapper = ({children}) => {
    return (
        <div className="px-5 py-5 md:px-16 bg-slate-50 flex flex-1 min-h-[calc(100vh-130px)]">
            {children}
        </div>
    );
};

export default DefaultPageWrapper;