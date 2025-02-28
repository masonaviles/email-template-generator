export interface NewScopeSectionFormProps {
    scopeSections: ScopeSection[];
    formLabelClass: string;
    formFieldClass: string;
    handleScopeSectionChange: (index: number, field: keyof ScopeSection, value: string | number) => void;
    handleUpdateChange: (index: number, updateIndex: number, value: string) => void;
    addScopeSection: () => void;
    removeScopeSection: (index: number) => void;
    addUpdate: (index: number) => void;
}

export interface UpdateScopeSectionFormProps {
    scopeSections: ScopeSection[];
    formLabelClass: string;
    formFieldClass: string;
    handleScopeSectionChange: (index: number, field: keyof ScopeSection, value: string | number) => void;
    handleUpdateChange: (index: number, updateIndex: number, value: string) => void;
    addScopeSection: () => void;
    removeScopeSection: (index: number) => void;
    addUpdate: (index: number) => void;
}

export interface ListOfGeosFormProps {
    formLabelClass: string;
    formFieldClass: string;
}

export interface ScopeSection {
    url: string;
    numScreens: number;
    numVideos: number;
    updates: string[];
}

export interface TemplateData {
    projectName: string;
    kickoffDate: string;
    dueDate: string;
    launchDate: string;
    producerName: string;
    projectDescription: string;
    milestonesSchedule: string;
    planetLink: string;
    icServerRequestLink: string;
    templateName: string;
    templateSubject: string;
    listOfReviewers: string[];
    projectOverview: string;
    projectBrief: string;
    listChoice: string;
    listOfGeos: string[];
    newScopeSections: ScopeSection[];
    updateScopeSections: ScopeSection[];
}  