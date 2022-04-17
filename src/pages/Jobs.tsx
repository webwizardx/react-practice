import { useEffect, useState } from 'react'
import backgroundMobile from '../assets/img/bg-header-mobile.svg'
import backgroundDesktop from '../assets/img/bg-header-desktop.svg'
import { Box, Flex, Text, Avatar, Badge, Card, Divider } from 'theme-ui'
import data from '../data/data.json'
import ClosableBadge from '../components/ClosableBadge'

const Jobs = () => {

    const [jobs, setJobs] = useState<{ data: typeof data, filteredData: typeof data }>({ data, filteredData: data })
    const [filters, setFilters] = useState<string[]>([])

    const addFilter = (filter: string) => {
        if (filters.includes(filter)) return;

        setFilters(prevFilters => [...prevFilters, filter])
    }

    const removeFilter = (index: number) => {
        const newFilters = [...filters];
        newFilters.splice(index, 1)

        setFilters(newFilters)
    }

    const clearFilters = () => setFilters([]);

    useEffect(() => {

        setJobs(prevJobs => {

            if (filters.length) {

                return {
                    data: prevJobs.data,
                    filteredData: prevJobs.data.filter(job => {
                        let isFiltered = false;

                        for (let language of job.languages) {
                            if (filters.includes(language)) {
                                isFiltered = true;
                                break;
                            }
                        }

                        return isFiltered;
                    })
                }

            } else {
                return {
                    data: prevJobs.data,
                    filteredData: prevJobs.data
                }
            }

        })

    }, [filters])

    return (
        <Box>
            <Box sx={{
                width: '100%',
                height: '156px',
                backgroundImage: [`url(${backgroundMobile})`, `url(${backgroundDesktop})`],
                backgroundSize: 'cover'
            }} />
            <Flex sx={{ flexDirection: 'column', gap: '2rem' }} p={4}>
                {filters.length > 0
                    ?
                    <Card sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                    >

                        <Flex sx={{ alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                            {filters.map(filter => (
                                <ClosableBadge key={filter} onClick={removeFilter}>{filter}</ClosableBadge>
                            ))}
                        </Flex>
                        <Text sx={{
                            ':hover': {
                                color: 'success',
                                textDecoration: 'underline',
                                transition: 'all .2s'
                            }
                        }} onClick={clearFilters}>Clear</Text>
                    </Card>
                    : null
                }
                {jobs.filteredData.length > 0
                    ? jobs.filteredData.map(job => (
                        <Card sx={{
                            display: ['block', 'flex'],
                            position: 'relative',
                            borderLeftWidth: job.featured ? '5px' : '',
                            borderLeftStyle: job.featured ? 'solid' : '',
                            borderLeftColor: job.featured ? 'success' : ''
                        }}
                            pt={[4, 3]}
                            key={job.id}
                        >
                            <Avatar sx={{ position: ['absolute', 'relative'], top: [0, 'unset'], transform: ['translateY(-50%)', 'unset'], width: ['48px', '72px'] }} mr={[0, 3]} src={job.logo} />
                            <Box>
                                <Flex sx={{ alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                                    <Text color='success'>{job.company}</Text>
                                    <Flex sx={{ gap: '0.5rem', flexWrap: 'wrap' }}>
                                        {job.new ? <Badge as='span' sx={{ fontWeight: 0 }} variant='primary'>NEW!</Badge> : null}
                                        {job.featured ? <Badge as='span' sx={{ fontWeight: 0 }} variant='secondary'>FEATURED</Badge> : null}
                                    </Flex>
                                </Flex>
                                <Text sx={{
                                    display: 'inline-block', fontSize: 2,
                                    ':hover': {
                                        color: 'success',
                                        transition: 'color .2s'
                                    }
                                }} my={3} color='darkerText'>{job.position}</Text>
                                <Text sx={{ display: ['inline-block', 'block'] }} mb={[3, 0]} color='text'>{job.postedAt} &#8226; {job.contract} &#8226; {job.location}</Text>
                            </Box>
                            <Divider sx={{ display: ['block', 'none'] }} />
                            {job.languages.length > 0
                                ? <Flex sx={{ alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }} mt={3} ml={[0, 'auto']}>
                                    {job.languages.map(language => (
                                        <Badge key={language}
                                            as='span'
                                            sx={{
                                                fontWeight: 1,
                                                ':hover, :hover > span': {
                                                    color: 'white',
                                                    backgroundColor: 'success',
                                                    transition: 'all .2s'
                                                }
                                            }}
                                            variant='filter'
                                            onClick={() => addFilter(language)}
                                        >
                                            <Text color='success'>{language}</Text>
                                        </Badge>
                                    ))}
                                </Flex>
                                : null}
                        </Card>
                    ))
                    : <Text>No Jobs</Text>}
            </Flex>
        </Box >
    )
}

export default Jobs