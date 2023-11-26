export const Card = ({ onClick, title, description, children }: { onClick: Function, title: string, description: string, children: React.ReactNode }) => {
    return (
        <div onClick={() => onClick()} className="w-full max-w-xs rounded shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {children}
            </div>
        </div>
    )
}