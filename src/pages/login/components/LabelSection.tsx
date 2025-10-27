import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import {CustomTextField} from "@/components";

export const LabelSection = () => {
    return <>
        <CustomTextField
            icon={<PersonIcon fontSize="small"/> }
            placeholder="Nazwa uzytkownika"
            sx={{backgroundColor:"white"}}
        />
        <CustomTextField
            icon={<LockIcon fontSize="small"/> }
            placeholder="Hasło"
            sx={{backgroundColor:"white"}}
        />
        </>
}