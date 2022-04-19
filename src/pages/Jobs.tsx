import { useEffect, useState } from 'react'
import backgroundMobile from '../assets/img/bg-header-mobile.svg'
import backgroundDesktop from '../assets/img/bg-header-desktop.svg'
import { Box, Flex, Text, Avatar, Badge, Divider } from '@chakra-ui/react'
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
            <Box
                backgroundImage={[`url(${backgroundMobile})`, `url(${backgroundDesktop})`]}
                backgroundSize={'cover'}
                w={'100%'}
                h={'156px'}
            />
            <Flex direction={'column'} gap={'2rem'} p={4}>
                {filters.length > 0
                    ?
                    <Flex justify={'space-between'} boxShadow={'md'} borderRadius={'md'} p={3}>
                        <Flex align={'center'} gap={'1rem'} wrap={'wrap'}>
                            {filters.map(filter => (
                                <ClosableBadge key={filter} onClick={removeFilter}>{filter}</ClosableBadge>
                            ))}
                        </Flex>
                        <Text _hover={{
                            color: 'success',
                            textDecoration: 'underline',
                            transition: 'all .2s'
                        }} onClick={clearFilters}>Clear</Text>
                    </Flex>
                    : null
                }
                {jobs.filteredData.length > 0
                    ? jobs.filteredData.map(job => (
                        <Box
                            display={['block', 'flex']}
                            position={'relative'}
                            borderRadius={'md'}
                            borderLeftWidth={job.featured ? '5px' : ''}
                            borderLeftStyle={job.featured ? 'solid' : 'unset'}
                            borderLeftColor={job.featured ? 'success' : ''}
                            p={4}
                            pt={[8, 4]}
                            key={job.id}
                        >
                            <Avatar
                                position={['absolute', 'relative']}
                                top={[0, 'unset']}
                                transform={['translateY(-50%)', 'unset']}
                                w={['48px', '100px']}
                                h={['48px', '100px']}
                                mr={[0, 3]}
                                src={job.logo}
                            />
                            <Box>
                                <Flex align={'center'} gap={'1rem'} wrap={'wrap'}>
                                    <Text color='success'>{job.company}</Text>
                                    <Flex gap={'0.5rem'} wrap={'wrap'}>
                                        {job.new
                                            ? <Badge
                                                as='span'
                                                py={1}
                                                px={2}
                                                textTransform={'uppercase'}
                                                borderRadius={'25px'}
                                                bg='success'
                                                color={'gray.50'}
                                            >NEW!
                                            </Badge>
                                            : null}
                                        {job.featured
                                            ? <Badge
                                                as='span'
                                                py={1}
                                                px={2}
                                                textTransform={'uppercase'}
                                                borderRadius={'25px'}
                                                bg='dark'
                                                color={'gray.50'}
                                            >FEATURED
                                            </Badge>
                                            : null
                                        }
                                    </Flex>
                                </Flex>
                                <Text
                                    display={'inline-block'}
                                    _hover={{
                                        color: 'success',
                                        transition: 'color .2s'
                                    }} my={3}
                                    color='dark'
                                    fontSize={'lg'}
                                >{job.position}</Text>
                                <Text
                                    display={['inline-block', 'block']}
                                    mb={[3, 0]}>{job.postedAt} &#8226; {job.contract} &#8226; {job.location}</Text>
                            </Box>
                            <Divider display={['block', 'none']} />
                            {job.languages.length > 0
                                ? <Flex align={'center'} gap={'1rem'} wrap={'wrap'} mt={3} ml={[0, 'auto']}>
                                    {job.languages.map(language => (
                                        <Badge key={language}
                                            as='span'
                                            py={1}
                                            px={2}
                                            borderTopLeftRadius={'5px'}
                                            borderBottomLeftRadius={'5px'}
                                            bg='gray.200'
                                            _hover={{
                                                color: 'white',
                                                backgroundColor: 'success',
                                                transition: 'all .2s',
                                                '& > span': {
                                                    color: 'gray.50'
                                                }
                                            }}
                                            onClick={() => addFilter(language)}
                                        >
                                            <Text as={'span'} color='success'>{language}</Text>
                                        </Badge>
                                    ))}
                                </Flex>
                                : null}
                        </Box>
                    ))
                    : <Text>No Jobs</Text>}
            </Flex>
        </Box >
    )
}

export default Jobs