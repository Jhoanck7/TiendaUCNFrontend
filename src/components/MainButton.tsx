"use client";


interface Props {
children: React.ReactNode;
onClick: () => void;
}


export default function MainButton({ children, onClick }: Readonly<Props>) {
return (
<button className="main-btn" onClick={onClick}>
{children}
</button>
);
}