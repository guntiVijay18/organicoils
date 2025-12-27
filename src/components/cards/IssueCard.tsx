import { Link } from "react-router-dom";
import { ArrowRight, Apple, Leaf, TreeDeciduous, Bug, CloudFog, Shrub, LucideIcon } from "lucide-react";

interface CropIssue {
  id: string;
  name: string;
  icon: string;
  shortDescription: string;
  affectedCrops: string[];
}

interface IssueCardProps {
  issue: CropIssue;
}

const iconMap: Record<string, LucideIcon> = {
  apple: Apple,
  leaf: Leaf,
  "tree-deciduous": TreeDeciduous,
  bug: Bug,
  "cloud-fog": CloudFog,
  shrub: Shrub,
};

const IssueCard = ({ issue }: IssueCardProps) => {
  const IconComponent = iconMap[issue.icon] || Leaf;

  return (
    <Link to={`/crop-issues/${issue.id}`} className="block group">
      <div className="card-organic p-6 h-full hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
        {/* Icon */}
        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
          <IconComponent className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {issue.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {issue.shortDescription}
        </p>

        {/* Affected Crops */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {issue.affectedCrops.slice(0, 3).map((crop) => (
            <span
              key={crop}
              className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
            >
              {crop}
            </span>
          ))}
        </div>

        {/* Link */}
        <div className="flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
          Learn More
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default IssueCard;
