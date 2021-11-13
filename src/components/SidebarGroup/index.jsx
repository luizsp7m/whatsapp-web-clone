import { Container, GroupImage, GroupInformation } from './styles';

export default function SidebarGroup() {
  return (
    <Container>
      <GroupImage>
        <img src="https://images.wallpaperscraft.com/image/single/clock_alarm_clock_time_222141_1280x720.jpg" alt="Group Image" />
      </GroupImage>

      <GroupInformation>
        <h5>What is Lorem Ipsum?</h5>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </GroupInformation>
    </Container>
  );
}