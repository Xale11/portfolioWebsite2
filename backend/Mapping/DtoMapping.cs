using backend.Dtos;
using backend.Entities;

namespace backend.Mapping;

public static class DtoMapping
{
  public static Project ToEntity(this ProjectDto project)
  {
    Project newProject = new() {
      Title = project.Title,
      Description = project.Description,
      Tools = project.Tools,
      WebUrl = project.WebUrl,
      GitHubUrl = project.GitHubUrl
    };
    return newProject;
  }

  public static Profile ToEntity(this ProfileDto profile)
  {
    Profile newProfile = new Profile() {
      Name = profile.Name,
      LongDescription = profile.LongDescription,
      ShortDescription = profile.ShortDescription,
      KeySkills = profile.KeySkills,
      OtherSkills = profile.OtherSkills,
      CvUrl = profile.CvUrl,
      YearsCoding = profile.YearsCoding,
      YearsWebDev = profile.YearsWebDev,
      PhoneNumber = profile.PhoneNumber,
      Email = profile.Email,
      Address = profile.Address,
    }; 
    return newProfile;
  }

  public static Service ToEntity(this ServiceDto service)
  {
    Service newService = new Service() {
      Name = service.Name,
      Description = service.Description,
    };
    return newService;
  }

  public static SocialMediaContact ToEntity(this SocialDto social, Profile? profile)
  {
    SocialMediaContact newSocial = new SocialMediaContact() {
      Platform = social.Platform,
      Username = social.Username,
      Url = social.Url,
      Profile = profile 
    };
    return newSocial;
  }
}