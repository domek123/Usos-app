import {CustomButton} from "@/components";
import { Stack, styled} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
export const ButtonSection = () => {
    return <Container>
            <CustomButton
            sx={{width:"49%",backgroundColor:"#5A6268"}}
            text={"Zresetuj hasło"}
            textSx={{color: "white"}}
            icon={<InfoIcon fontSize="small" style={{color:"white"}}/>}
            href="https://cri.agh.edu.pl/pomoc-it/instrukcje/zmiana-i-resetowanie-hasla-do-sso"
            />
        <CustomButton
            sx={{width:"49%",backgroundColor:"#5A6268"}}
            textSx={{color: "white"}}
            text={"Pierwsze logowanie"}
            icon={<InfoIcon fontSize="small" style={{color:"white"}}/>}
            href="https://cri.agh.edu.pl/pomoc-it/instrukcje/zakladanie-konta-pocztowego"
        />
    </Container>
}

const Container = styled(Stack)({
    flexDirection: "row",
    justifyContent: "space-between",
    width:"100%",
})