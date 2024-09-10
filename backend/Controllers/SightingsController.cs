using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;
using WhaleSpotting.Models.Request;
using WhaleSpotting.Models.Response;
using WhaleSpotting.Services;

namespace WhaleSpotting.Controllers;

[ApiController]
[Route("/sightings")]
public class SightingsController : Controller
{
    private readonly ISightingsService _service;

    public SightingsController(ISightingsService service)
    {
        _service = service;
    }

    [HttpPost("create")]
    public async Task<IActionResult> Create(SightingsRequest sightingRequest)
    {
        try
        {
            sightingRequest.UserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            sightingRequest.Description = User.FindFirst(ClaimTypes.Role).Value;
        }
        catch (Exception ex)
        {
            return BadRequest(User.FindFirst(ClaimTypes.NameIdentifier).Value);
        }

        try
        {
            await _service.CreateSighting(sightingRequest);
            return Ok();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}
