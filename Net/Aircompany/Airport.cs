using System.Collections.Generic;
using System.Linq;
using Aircompany.Models;
using Aircompany.Planes;

namespace Aircompany
{
    public class Airport
    {
        public List<Plane> Planes;

        public Airport(IEnumerable<Plane> planes)
        {
            Planes = planes.ToList();
        }

        public IEnumerable<PassengerPlane> GetPassengersPlanes() => _planes.OfType<PassengerPlane>();

        public IEnumerable<MilitaryPlane> GetMilitaryPlanes() => Planes.OfType<MilitaryPlane>();

        public PassengerPlane GetPassengerPlaneWithMaximumPassengersCapacity()
        {
            var passengerPlanes = GetPassengersPlanes();
            return passengerPlanes.Aggregate((firstPlane, secondPlane) => firstPlane.PassengersCapacity > secondPlane.PassengersCapacity ? firstPlane : secondPlane);
        }

        public List<MilitaryPlane> GetTransportMilitaryPlanes()
        {
            var militaryPlanesList = GetMilitaryPlanes();
            var type = "Transport";
            return militaryPlanesList.Where(plane => plane.mililatyType == type);
        }

        public Airport SortByMaximumDistance() => new Airport(Planes.OrderByDescending(plane => plane.MaxFlightDistance));

        public Airport SortByMaximumSpeed() => new Airport(Planes.OrderByDescending(plane => plane.MaxSpeed));

        public Airport SortByMaximumLoadCapacity() => new Airport(Planes.OrderByDescending(plane => plane.MaxLoadCapacity));

        public IEnumerable<Plane> GetPlanes() => Planes;

        public override string ToString()
        {
            return "Airport: planes=" + string.Join(", ", Planes.Select(plane => plane.Model)) + ".";
        }
    }
}
