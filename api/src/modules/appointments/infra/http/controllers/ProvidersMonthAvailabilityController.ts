import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderMonthAvailabilityService from '@modules/appointments/services/ListProviderMonthAvailabilityService';

class ProvidersMonthAvailabilitycontroller {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { month, year } = request.body;

    const listProviderMonthAvailabiltiy = container.resolve(
      ListProviderMonthAvailabilityService,
    );

    const availability = await listProviderMonthAvailabiltiy.execute({
      provider_id,
      month,
      year,
    });

    return response.status(200).json(availability);
  }
}

export default ProvidersMonthAvailabilitycontroller;
