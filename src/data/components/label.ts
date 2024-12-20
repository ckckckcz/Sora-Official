export function getLabel(label: string): string {
    switch (label) {
        case "Landing Page":
            return "bg-blue-200 text-blue-700"; 
        case "UI/UX Design":
            return "bg-red-200 text-red-700";
        default:
            return ""; 
    }
}
