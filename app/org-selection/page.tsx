import { OrganizationList } from "@clerk/nextjs";
 export default function OrgSelectionPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            
            <OrganizationList appearance={{ elements: {
                rootBox: "w-[400px] rounded-lg border bg-white p-6 shadow-md",
                card: 'shadow-lg'
            }}} 
            hidePersonal={true}
            afterCreateOrganizationUrl="/"
            afterSelectOrganizationUrl="/"

            />
        </div>
    )
}