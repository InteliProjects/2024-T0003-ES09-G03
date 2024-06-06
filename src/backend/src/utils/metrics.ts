import express from 'express'
import client from 'prom-client'

const app = express()

// Definição da métrica
export const countSurveysSentPerHourHistogram = new client.Histogram({
  name: 'quantity_of_surveys_sent_hour',
  help: 'Quantity of surveys sent per hour',
  labelNames: ['hour_of_day'],
})

export const countRequestErrorDistribution = new client.Counter({
  name: 'quantity_of_request_error_distribution',
  help: 'quantity of request return error of distribution',
  labelNames: ['router'],
})

export const reportAnswersCounterCounter = new client.Counter({
  name: 'counter_answered_reports_on_a_day',
  help: 'Number of answers in a day',
})

export const responseTimeHistogram = new client.Histogram({
  name: 'route_response_time_seconds',
  help: 'Response time of a specific route in seconds',
  labelNames: ['route'],
  buckets: [0.1, 0.5, 1, 2, 5], // Definindo os intervalos de tempo em segundos
})

export function startMetricsServer() {
  const endTimeInSeconds = 5 // Por exemplo, 5 segundos
  const endTime = [Math.floor(endTimeInSeconds), (endTimeInSeconds % 1) * 1e9]

  const date = new Date().getHours()
  countSurveysSentPerHourHistogram.labels({ hour_of_day: date }).observe(12)
  countRequestErrorDistribution.inc({ router: 'sendDistribution' })
  countRequestErrorDistribution.inc({ router: 'sendDistribution' })
  countRequestErrorDistribution.inc({ router: 'sendDistribution' })

  reportAnswersCounterCounter.inc()
  reportAnswersCounterCounter.inc()
  reportAnswersCounterCounter.inc()
  reportAnswersCounterCounter.inc()

  responseTimeHistogram
    .labels({ route: '/upload_file' })
    .observe(endTime[0] + endTime[1] / 1e9)

  const collectDefaultMetrics = client.collectDefaultMetrics

  collectDefaultMetrics()

  app.get('/metrics', async (req, res) => {
    res.set('Content-Type', client.register.contentType)

    return res.send(await client.register.metrics())
  })

  app.listen(3001, () => {
    console.log('Metrics server started at http://localhost:3001')
  })
}
