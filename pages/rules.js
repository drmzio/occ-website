import * as React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import PageHeader from '../src/components/PageHeader';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Rules() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PageHeader title="Rules" subtitle="Last Updated June 25, 2020" />
      <Box sx={{ py: 6 }}>
        <Container maxWidth="md">
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom>A. General Composure</Typography>
            <Divider sx={{ mb: 2 }} />
            <ol>
              <li>Be nice and respectful towards everyone. Excessive swearing, rudeness and harassment is not tolerated.</li>
              <li>Do not spam or advertise.</li>
              <li>Observers should never give tactical information to players or intentionally disrupt game play.</li>
              <li>Follow any directions given by a Overcast Community staff member. If you believe a staff member has directed you wrongly, please email <a href="#">brott@oc.tc</a>.</li>
            </ol>
          </Box>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom>B. General Gameplay</Typography>
            <Divider sx={{ mb: 2 }} />
            <ol>
              <li>Players may not abuse glitches, like placing blocks in areas restricted by the plugin to walk on, also known as "block glitching".</li>
              <li>Maps may have rules that apply only to that specific map. They can be read under <code>/map</code>.</li>
              <li>Players may only press one button, and having it register as one click.</li>
            </ol>
          </Box>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom>C. Client Mods</Typography>
            <Divider sx={{ mb: 2 }} />
            <ol>
              <li>Any client mods or external tools that give you an unfair advantage over vanilla Minecraft users are illegal while playing.</li>
              <li>
                The following mods are explicitly permitted:
                <ul>
                  <li>Optifine</li>
                  <li>Lithium, Phosphor & Sodium</li>
                  <li>ArmorStatusHUD / StatusEffectHUD</li>
                  <li>LabyMod & 5zig</li>
                  <li>Toggle Sneak / Sprint</li>
                  <li>VoxelMap, or other Minimaps without radar and cave mapping</li>
                  <li>Badlion Client & Lunar Client</li>
                </ul>
              </li>
              <li>
                The following mods are explicitly prohibited:
                <ul>
                  <li>Inventory Sorters</li>
                  <li>Mods that expose or enlarge the name-tags of players</li>
                  <li>Automatic tool selectors</li>
                  <li>Minimaps that show entity positions, or show caves/underground.</li>
                  <li>X-rays</li>
                  <li>Auto-hitters/Autoclickers</li>
                  <li>Aimbots</li>
                  <li>Fly mods</li>
                  <li>Fly mods</li>
                  <li>SmartMoving</li>
                </ul>
              </li>
              <li>For any other mods, email <a href="mailto:brott@oc.tc">brott@oc.tc</a> for confirmation before using it.</li>
            </ol>
          </Box>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom>D. Team Griefing</Typography>
            <Divider sx={{ mb: 2 }} />
            <ol>
              <li>Team griefing is prohibited, and is defined as any action that harms your own team.</li>
              <li>
                Common indicators of team griefing:
                <ul>
                  <li>Placing and/or setting off TNT in your base (for non defensive purposes).</li>
                  <li>Destroying your own team's chests or workbenches</li>
                  <li>Teamkilling by spleefing or blowing them up with TNT.</li>
                  <li>Aiding or working together with a member of the other team.</li>
                </ul>
              </li>
              <li>Players may only press one button, and having it register as one click.</li>
            </ol>
          </Box>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom>E. Punishments</Typography>
            <Divider sx={{ mb: 2 }} />
            <ol>
              <li>Players may be kicked for breaking the rules. If the rule violation is severe, you may be banned instead.</li>
              <li>Evading a punishment by connecting with another account is not allowed, and may result in all your accounts and IP address being banned.</li>
              <li>Bans may be appealed by emailing <a href="mailto:brott@oc.tc">brott@oc.tc</a> with your full in-game username.</li>
            </ol>
          </Box>
          <Box>
            <Typography variant="h4" component="h2" gutterBottom>F. Tournament</Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography component="p">
              Tournament rules can be found here
            </Typography>
          </Box>
        </Container>
      </Box>
    </div>
  )
}
