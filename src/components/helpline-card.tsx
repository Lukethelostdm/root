import { WidthWrapper } from "./wrapper";

type HelplineProps = {
    name: string;
    phone?: string; 
    website: string;
  };
  
  const HelplineCard: React.FC<HelplineProps> = ({ name, phone, website }) => {
    return (
        <WidthWrapper>
      <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <h2 className="mb-2 text-xl font-bold tracking-tight text-black">{name}</h2>
        <strong>Phone:</strong> 
        <a href={`tel:${phone}`} className="text-blue-500">{phone}</a>
        <p>
          <a href={website} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
            Visit Website
          </a>
        </p>
      </div>
      </WidthWrapper>
    );
  };
  
  export default HelplineCard;
  