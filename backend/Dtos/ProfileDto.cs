namespace backend.Dtos;

public record class ProfileDto
(
  string Name,
  string LongDescription,
  string ShortDescription,
  string[] KeySkills,
  string[] OtherSkills,
  string CvUrl,
  int YearsCoding,
  int YearsWebDev,
  string PhoneNumber,
  string Email,
  string Address
);