import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Box, Button } from '@mui/material';

export default function Index() {
  const t = useTranslations('Index');
  return <Box>
    <Link href="/en">
      <Button>English</Button>
    </Link>
    <Link href="/es">
      <Button>Spanish</Button>
    </Link>
    {t('title')}
  </Box>;
}