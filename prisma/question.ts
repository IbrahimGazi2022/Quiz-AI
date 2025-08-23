type QuestionSeedData = {
    question: string;
    topic: string;
    difficulty: 'easy' | 'medium' | 'hard';
    correctAnswer: 'A' | 'B' | 'C' | 'D';
    options: {
        label: 'A' | 'B' | 'C' | 'D';
        text: string;
        isCorrect: boolean;
    }[];
};

export const questions: QuestionSeedData[] = [
    // Easy Questions (1–20)
    {
        question: "What is Next.js primarily used for?",
        topic: "nextjs",
        difficulty: "easy",
        correctAnswer: "B",
        options: [
            { label: "A", text: "Mobile app development", isCorrect: false },
            { label: "B", text: "Building React-based web applications with SSR/SSG", isCorrect: true },
            { label: "C", text: "Database management", isCorrect: false },
            { label: "D", text: "CSS framework development", isCorrect: false }
        ]
    },
    {
        question: "Which command creates a new Next.js app?",
        topic: "nextjs",
        difficulty: "easy",
        correctAnswer: "C",
        options: [
            { label: "A", text: "npm create-next-app", isCorrect: false },
            { label: "B", text: "npx new-next-app", isCorrect: false },
            { label: "C", text: "npx create-next-app@latest", isCorrect: true },
            { label: "D", text: "npm init next-app", isCorrect: false }
        ]
    },
    {
        question: "What does SSR stand for in Next.js?",
        topic: "nextjs",
        difficulty: "easy",
        correctAnswer: "A",
        options: [
            { label: "A", text: "Server-Side Rendering", isCorrect: true },
            { label: "B", text: "Static Site Rendering", isCorrect: false },
            { label: "C", text: "Server-Side Routing", isCorrect: false },
            { label: "D", text: "Static Site Regeneration", isCorrect: false }
        ]
    },
    {
        question: "Which folder is used for pages in the App Router?",
        topic: "nextjs",
        difficulty: "easy",
        correctAnswer: "B",
        options: [
            { label: "A", text: "pages/", isCorrect: false },
            { label: "B", text: "app/", isCorrect: true },
            { label: "C", text: "src/", isCorrect: false },
            { label: "D", text: "components/", isCorrect: false }
        ]
    },
    {
        question: "How do you create a new page in the App Router?",
        topic: "nextjs",
        difficulty: "easy",
        correctAnswer: "C",
        options: [
            { label: "A", text: "Create a file in pages/", isCorrect: false },
            { label: "B", text: "Create a component in components/", isCorrect: false },
            { label: "C", text: "Create a folder in app/ with page.jsx", isCorrect: true },
            { label: "D", text: "Create a route in routes/", isCorrect: false }
        ]
    },
    {
        question: "What is the default port for Next.js development server?",
        topic: "nextjs",
        difficulty: "easy",
        correctAnswer: "A",
        options: [
            { label: "A", text: "3000", isCorrect: true },
            { label: "B", text: "8080", isCorrect: false },
            { label: "C", text: "4200", isCorrect: false },
            { label: "D", text: "5000", isCorrect: false }
        ]
    },
    {
        question: "Which function is used for Server-Side Rendering in Pages Router?",
        topic: "nextjs",
        difficulty: "easy",
        correctAnswer: "B",
        options: [
            { label: "A", text: "getStaticProps", isCorrect: false },
            { label: "B", text: "getServerSideProps", isCorrect: true },
            { label: "C", text: "getInitialProps", isCorrect: false },
            { label: "D", text: "getProps", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of next.config.js?",
        topic: "nextjs",
        difficulty: "easy",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To configure CSS styles", isCorrect: false },
            { label: "B", text: "To define page routes", isCorrect: false },
            { label: "C", text: "To customize Next.js configuration", isCorrect: true },
            { label: "D", text: "To manage environment variables", isCorrect: false }
        ]
    },
    {
        question: "How do you add global CSS in Next.js?",
        topic: "nextjs",
        difficulty: "easy",
        correctAnswer: "A",
        options: [
            { label: "A", text: "Import it in app/layout.jsx or pages/_app.js", isCorrect: true },
            { label: "B", text: "Import it in each component", isCorrect: false },
            { label: "C", text: "Add it to next.config.js", isCorrect: false },
            { label: "D", text: "Use style attribute in HTML", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of Image component in Next.js?",
        topic: "nextjs",
        difficulty: "easy",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To create image galleries", isCorrect: false },
            { label: "B", text: "To optimize images automatically", isCorrect: true },
            { label: "C", text: "To style images", isCorrect: false },
            { label: "D", text: "To manage image uploads", isCorrect: false }
        ]
    },
    {
        question: "Which hook is used for navigation in Next.js?",
        topic: "nextjs",
        difficulty: "easy",
        correctAnswer: "C",
        options: [
            { label: "A", text: "useHistory", isCorrect: false },
            { label: "B", text: "useNavigate", isCorrect: false },
            { label: "C", text: "useRouter", isCorrect: true },
            { label: "D", text: "useLink", isCorrect: false }
        ]
    },
    {
        question: "How do you create a dynamic route in App Router?",
        topic: "nextjs",
        difficulty: "easy",
        correctAnswer: "A",
        options: [
            { label: "A", text: "app/blog/[slug]/page.jsx", isCorrect: true },
            { label: "B", text: "app/blog/slug/page.jsx", isCorrect: false },
            { label: "C", text: "app/blog/{slug}/page.jsx", isCorrect: false },
            { label: "D", text: "app/blog/:slug/page.jsx", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of Link component?",
        topic: "nextjs",
        difficulty: "easy",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To style links", isCorrect: false },
            { label: "B", text: "To create external links", isCorrect: false },
            { label: "C", text: "To enable client-side navigation", isCorrect: true },
            { label: "D", text: "To manage API links", isCorrect: false }
        ]
    },
    {
        question: "Which function generates static pages at build time?",
        topic: "nextjs",
        difficulty: "easy",
        correctAnswer: "B",
        options: [
            { label: "A", text: "getServerSideProps", isCorrect: false },
            { label: "B", text: "getStaticProps", isCorrect: true },
            { label: "C", text: "getStaticPaths", isCorrect: false },
            { label: "D", text: "generateStaticParams", isCorrect: false }
        ]
    },
    {
        question: "What is ISR in Next.js?",
        topic: "nextjs",
        difficulty: "easy",
        correctAnswer: "A",
        options: [
            { label: "A", text: "Incremental Static Regeneration", isCorrect: true },
            { label: "B", text: "Internal Static Rendering", isCorrect: false },
            { label: "C", text: "Instant Server Response", isCorrect: false },
            { label: "D", text: "Integrated Static Routing", isCorrect: false }
        ]
    },
    {
        question: "How do you access route parameters in App Router?",
        topic: "nextjs",
        difficulty: "easy",
        correctAnswer: "C",
        options: [
            { label: "A", text: "useRouter().query", isCorrect: false },
            { label: "B", text: "props.params", isCorrect: false },
            { label: "C", text: "params prop in page component", isCorrect: true },
            { label: "D", text: "useParams() hook", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of head.jsx in App Router?",
        topic: "nextjs",
        difficulty: "easy",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To create header components", isCorrect: false },
            { label: "B", text: "To modify the <head> of the page", isCorrect: true },
            { label: "C", text: "To manage state headers", isCorrect: false },
            { label: "D", text: "To style page headers", isCorrect: false }
        ]
    },
    {
        question: "Which file defines the root layout in App Router?",
        topic: "nextjs",
        difficulty: "easy",
        correctAnswer: "A",
        options: [
            { label: "A", text: "app/layout.jsx", isCorrect: true },
            { label: "B", text: "app/root.jsx", isCorrect: false },
            { label: "C", text: "app/main.jsx", isCorrect: false },
            { label: "D", text: "pages/_app.js", isCorrect: false }
        ]
    },
    {
        question: "How do you create an API route in App Router?",
        topic: "nextjs",
        difficulty: "easy",
        correctAnswer: "C",
        options: [
            { label: "A", text: "app/api/route.js", isCorrect: false },
            { label: "B", text: "pages/api/route.js", isCorrect: false },
            { label: "C", text: "app/api/route.js or pages/api/route.js", isCorrect: true },
            { label: "D", text: "src/api/route.js", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of loading.jsx in App Router?",
        topic: "nextjs",
        difficulty: "easy",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To load external scripts", isCorrect: false },
            { label: "B", text: "To show loading UI while content loads", isCorrect: true },
            { label: "C", text: "To manage component loading", isCorrect: false },
            { label: "D", text: "To optimize asset loading", isCorrect: false }
        ]
    },

    // Medium Questions (21–40)
    {
        question: "What is the difference between Pages Router and App Router?",
        topic: "nextjs",
        difficulty: "medium",
        correctAnswer: "C",
        options: [
            { label: "A", text: "App Router is deprecated", isCorrect: false },
            { label: "B", text: "Pages Router has more features", isCorrect: false },
            { label: "C", text: "App Router uses React Server Components and has new features", isCorrect: true },
            { label: "D", text: "They are identical", isCorrect: false }
        ]
    },
    {
        question: "How do you implement ISR with revalidate in App Router?",
        topic: "nextjs",
        difficulty: "medium",
        correctAnswer: "A",
        options: [
            { label: "A", text: "export const revalidate = 60", isCorrect: true },
            { label: "B", text: "getStaticProps with revalidate", isCorrect: false },
            { label: "C", text: "useRevalidate hook", isCorrect: false },
            { label: "D", text: "next.config.js revalidate option", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of generateStaticParams?",
        topic: "nextjs",
        difficulty: "medium",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To generate static CSS", isCorrect: false },
            { label: "B", text: "To generate static paths for dynamic routes", isCorrect: true },
            { label: "C", text: "To create static parameters", isCorrect: false },
            { label: "D", text: "To optimize static generation", isCorrect: false }
        ]
    },
    {
        question: "How do you handle environment variables in Next.js?",
        topic: "nextjs",
        difficulty: "medium",
        correctAnswer: "D",
        options: [
            { label: "A", text: "Using .env file only", isCorrect: false },
            { label: "B", text: "Using process.env directly", isCorrect: false },
            { label: "C", text: "Using next.config.js env field", isCorrect: false },
            { label: "D", text: "Using .env.local with NEXT_PUBLIC_ prefix for client", isCorrect: true }
        ]
    },
    {
        question: "What is the purpose of middleware in Next.js?",
        topic: "nextjs",
        difficulty: "medium",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To style middle components", isCorrect: false },
            { label: "B", text: "To manage API middleware", isCorrect: false },
            { label: "C", text: "To run code before a request is completed", isCorrect: true },
            { label: "D", text: "To handle database middleware", isCorrect: false }
        ]
    },
    {
        question: "How do you create a layout that applies to multiple pages?",
        topic: "nextjs",
        difficulty: "medium",
        correctAnswer: "A",
        options: [
            { label: "A", text: "Create layout.jsx in a folder", isCorrect: true },
            { label: "B", text: "Use _app.js in Pages Router", isCorrect: false },
            { label: "C", text: "Create multiple layout files", isCorrect: false },
            { label: "D", text: "Use CSS layout styles", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of error.jsx in App Router?",
        topic: "nextjs",
        difficulty: "medium",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To handle API errors", isCorrect: false },
            { label: "B", text: "To show error UI when a segment fails", isCorrect: true },
            { label: "C", text: "To log errors to console", isCorrect: false },
            { label: "D", text: "To create error boundaries", isCorrect: false }
        ]
    },
    {
        question: "How do you implement redirects in Next.js?",
        topic: "nextjs",
        difficulty: "medium",
        correctAnswer: "D",
        options: [
            { label: "A", text: "Using next.config.js redirects", isCorrect: false },
            { label: "B", text: "Using redirect() function", isCorrect: false },
            { label: "C", text: "Using useRouter().push", isCorrect: false },
            { label: "D", text: "All of the above", isCorrect: true }
        ]
    },
    {
        question: "What is the purpose of notFound() function?",
        topic: "nextjs",
        difficulty: "medium",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To show 404 page programmatically", isCorrect: true },
            { label: "B", text: "To handle missing files", isCorrect: false },
            { label: "C", text: "To create custom error pages", isCorrect: false },
            { label: "D", text: "To log missing resources", isCorrect: false }
        ]
    },
    {
        question: "How do you optimize fonts in Next.js?",
        topic: "nextjs",
        difficulty: "medium",
        correctAnswer: "C",
        options: [
            { label: "A", text: "Using @font-face in CSS", isCorrect: false },
            { label: "B", text: "Using Google Fonts link", isCorrect: false },
            { label: "C", text: "Using next/font package", isCorrect: true },
            { label: "D", text: "Using font optimization plugins", isCorrect: false }
        ]
    },
    {
        question: "What is the difference between useRouter and useSearchParams?",
        topic: "nextjs",
        difficulty: "medium",
        correctAnswer: "B",
        options: [
            { label: "A", text: "useRouter is for App Router, useSearchParams for Pages", isCorrect: false },
            { label: "B", text: "useRouter for navigation, useSearchParams for query params", isCorrect: true },
            { label: "C", text: "They are identical", isCorrect: false },
            { label: "D", text: "useSearchParams is deprecated", isCorrect: false }
        ]
    },
    {
        question: "How do you handle API routes in App Router?",
        topic: "nextjs",
        difficulty: "medium",
        correctAnswer: "A",
        options: [
            { label: "A", text: "app/api/route.js with HTTP methods", isCorrect: true },
            { label: "B", text: "pages/api/route.js only", isCorrect: false },
            { label: "C", text: "src/api/ folder", isCorrect: false },
            { label: "D", text: "next.config.js api routes", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of usePathname hook?",
        topic: "nextjs",
        difficulty: "medium",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To get query parameters", isCorrect: false },
            { label: "B", text: "To navigate to paths", isCorrect: false },
            { label: "C", text: "To get current URL pathname", isCorrect: true },
            { label: "D", text: "To set path names", isCorrect: false }
        ]
    },
    {
        question: "How do you implement authentication in Next.js?",
        topic: "nextjs",
        difficulty: "medium",
        correctAnswer: "D",
        options: [
            { label: "A", text: "Using next-auth only", isCorrect: false },
            { label: "B", text: "Using middleware only", isCorrect: false },
            { label: "C", text: "Using API routes only", isCorrect: false },
            { label: "D", text: "Using next-auth, middleware, or custom solutions", isCorrect: true }
        ]
    },
    {
        question: "What is the purpose of parallel routes?",
        topic: "nextjs",
        difficulty: "medium",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To render multiple pages simultaneously", isCorrect: true },
            { label: "B", text: "To handle parallel API calls", isCorrect: false },
            { label: "C", text: "To optimize parallel rendering", isCorrect: false },
            { label: "D", text: "To create parallel navigation", isCorrect: false }
        ]
    },
    {
        question: "How do you handle CSS modules in Next.js?",
        topic: "nextjs",
        difficulty: "medium",
        correctAnswer: "B",
        options: [
            { label: "A", text: "Using .module.css files automatically", isCorrect: true },
            { label: "B", text: "Using special CSS module config", isCorrect: false },
            { label: "C", text: "Using @modules directive", isCorrect: false },
            { label: "D", text: "Using next-css plugin", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of intercepting routes?",
        topic: "nextjs",
        difficulty: "medium",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To intercept API requests", isCorrect: false },
            { label: "B", text: "To handle route errors", isCorrect: false },
            { label: "C", text: "To show a route in context while keeping UI", isCorrect: true },
            { label: "D", text: "To create route middleware", isCorrect: false }
        ]
    },
    {
        question: "How do you deploy Next.js to Vercel?",
        topic: "nextjs",
        difficulty: "medium",
        correctAnswer: "A",
        options: [
            { label: "A", text: "Connect Git repository to Vercel", isCorrect: true },
            { label: "B", text: "Manual build and upload", isCorrect: false },
            { label: "C", text: "Using vercel deploy command", isCorrect: false },
            { label: "D", text: "All of the above", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of useTransition hook in Next.js?",
        topic: "nextjs",
        difficulty: "medium",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To handle CSS transitions", isCorrect: false },
            { label: "B", text: "To manage navigation transitions", isCorrect: true },
            { label: "C", text: "To create page transitions", isCorrect: false },
            { label: "D", text: "To optimize transition performance", isCorrect: false }
        ]
    },
    {
        question: "How do you handle SEO in Next.js?",
        topic: "nextjs",
        difficulty: "medium",
        correctAnswer: "D",
        options: [
            { label: "A", text: "Using head.jsx only", isCorrect: false },
            { label: "B", text: "Using next/head only", isCorrect: false },
            { label: "C", text: "Using next-seo only", isCorrect: false },
            { label: "D", text: "Using head.jsx, next/head, or next-seo", isCorrect: true }
        ]
    },

    // Hard Questions (41–60)
    {
        question: "What are React Server Components in Next.js?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "Components that run only on server", isCorrect: false },
            { label: "B", text: "Components that handle server logic", isCorrect: false },
            { label: "C", text: "Components that render on server reducing client JS", isCorrect: true },
            { label: "D", text: "Components for API routes", isCorrect: false }
        ]
    },
    {
        question: "How do you implement streaming in App Router?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "Using Suspense and loading.jsx", isCorrect: true },
            { label: "B", text: "Using stream() function", isCorrect: false },
            { label: "C", text: "Using next/stream package", isCorrect: false },
            { label: "D", text: "Using web streams API", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of useOptimistic hook?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To optimize performance", isCorrect: false },
            { label: "B", text: "To show optimistic UI during mutations", isCorrect: true },
            { label: "C", text: "To handle optimistic rendering", isCorrect: false },
            { label: "D", text: "To create optimistic updates", isCorrect: false }
        ]
    },
    {
        question: "How do you handle database connections in Next.js?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "D",
        options: [
            { label: "A", text: "Using API routes only", isCorrect: false },
            { label: "B", text: "Using server actions only", isCorrect: false },
            { label: "C", text: "Using getServerSideProps only", isCorrect: false },
            { label: "D", text: "Using API routes, server actions, or server components", isCorrect: true }
        ]
    },
    {
        question: "What is the purpose of generateMetadata function?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To generate dynamic metadata for pages", isCorrect: true },
            { label: "B", text: "To create metadata files", isCorrect: false },
            { label: "C", text: "To optimize metadata generation", isCorrect: false },
            { label: "D", text: "To handle metadata in API routes", isCorrect: false }
        ]
    },
    {
        question: "How do you implement internationalization (i18n) in Next.js?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "Using next-i18next only", isCorrect: false },
            { label: "B", text: "Using next.config.js i18n only", isCorrect: false },
            { label: "C", text: "Using next-intl or next.config.js i18n", isCorrect: true },
            { label: "D", text: "Using React i18n only", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of useFormStatus hook?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To manage form state", isCorrect: false },
            { label: "B", text: "To get form status during server actions", isCorrect: true },
            { label: "C", text: "To handle form validation", isCorrect: false },
            { label: "D", text: "To create form status UI", isCorrect: false }
        ]
    },
    {
        question: "How do you handle WebSockets in Next.js?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "D",
        options: [
            { label: "A", text: "Using API routes only", isCorrect: false },
            { label: "B", text: "Using server components only", isCorrect: false },
            { label: "C", text: "Using custom server only", isCorrect: false },
            { label: "D", text: "Using API routes or custom server", isCorrect: true }
        ]
    },
    {
        question: "What is the purpose of unstable_noStore?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To disable data storage", isCorrect: false },
            { label: "B", text: "To prevent caching", isCorrect: false },
            { label: "C", text: "To opt-out of static rendering dynamically", isCorrect: true },
            { label: "D", text: "To handle unstable storage", isCorrect: false }
        ]
    },
    {
        question: "How do you implement rate limiting in API routes?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "Using libraries like rate-limiter-flexible", isCorrect: true },
            { label: "B", text: "Using next.config.js rateLimit", isCorrect: false },
            { label: "C", text: "Using middleware only", isCorrect: false },
            { label: "D", text: "Using built-in rate limiting", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of useSelectedLayoutSegment?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To select layout segments", isCorrect: false },
            { label: "B", text: "To read active route segments", isCorrect: true },
            { label: "C", text: "To create segmented layouts", isCorrect: false },
            { label: "D", text: "To handle layout segmentation", isCorrect: false }
        ]
    },
    {
        question: "How do you handle file uploads in Next.js?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "Using client components only", isCorrect: false },
            { label: "B", text: "Using API routes only", isCorrect: false },
            { label: "C", text: "Using API routes with multipart parsing", isCorrect: true },
            { label: "D", text: "Using next/upload package", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of draft mode?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To preview draft content from CMS", isCorrect: true },
            { label: "B", text: "To create draft pages", isCorrect: false },
            { label: "C", text: "To handle draft content editing", isCorrect: false },
            { label: "D", text: "To optimize draft rendering", isCorrect: false }
        ]
    },
    {
        question: "How do you implement custom error pages?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "D",
        options: [
            { label: "A", text: "Using error.jsx only", isCorrect: false },
            { label: "B", text: "Using pages/404.js only", isCorrect: false },
            { label: "C", text: "Using pages/_error.js only", isCorrect: false },
            { label: "D", text: "Using error.jsx, pages/404.js, or pages/_error.js", isCorrect: true }
        ]
    },
    {
        question: "What is the purpose of useFormState hook?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To manage form state locally", isCorrect: false },
            { label: "B", text: "To handle form validation", isCorrect: false },
            { label: "C", text: "To manage state that updates based on form actions", isCorrect: true },
            { label: "D", text: "To create form state machines", isCorrect: false }
        ]
    },
    {
        question: "How do you implement real-time features in Next.js?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "D",
        options: [
            { label: "A", text: "Using WebSockets only", isCorrect: false },
            { label: "B", text: "Using Server-Sent Events only", isCorrect: false },
            { label: "C", text: "Using polling only", isCorrect: false },
            { label: "D", text: "Using WebSockets, SSE, or third-party services", isCorrect: true }
        ]
    },
    {
        question: "What is the purpose of caching strategies in Next.js?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To cache API responses only", isCorrect: false },
            { label: "B", text: "To optimize performance with data caching", isCorrect: true },
            { label: "C", text: "To handle browser caching", isCorrect: false },
            { label: "D", text: "To create cache layers", isCorrect: false }
        ]
    },
    {
        question: "How do you handle environment-specific configs?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "Using different .env files", isCorrect: true },
            { label: "B", text: "Using next.config.js environments", isCorrect: false },
            { label: "C", text: "Using process.env.NODE_ENV checks", isCorrect: false },
            { label: "D", text: "Using environment plugins", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of next/script?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To write custom scripts", isCorrect: false },
            { label: "B", text: "To handle server scripts", isCorrect: false },
            { label: "C", text: "To optimize third-party script loading", isCorrect: true },
            { label: "D", text: "To create script components", isCorrect: false }
        ]
    },
    {
        question: "How do you implement A/B testing in Next.js?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "D",
        options: [
            { label: "A", text: "Using middleware only", isCorrect: false },
            { label: "B", text: "Using API routes only", isCorrect: false },
            { label: "C", text: "Using next.config.js only", isCorrect: false },
            { label: "D", text: "Using middleware, API routes, or third-party tools", isCorrect: true }
        ]
    },

    // Very Hard Questions (61–80)
    {
        question: "What is the purpose of React's use API in Next.js?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To create custom hooks", isCorrect: false },
            { label: "B", text: "To read context or consume promises in components", isCorrect: true },
            { label: "C", text: "To use React features", isCorrect: false },
            { label: "D", text: "To replace useContext", isCorrect: false }
        ]
    },
    {
        question: "How do you implement custom server in Next.js?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "Using server.js with custom Express/Koa server", isCorrect: true },
            { label: "B", text: "Using next-server package", isCorrect: false },
            { label: "C", text: "Using custom server config", isCorrect: false },
            { label: "D", text: "Using next.config.js server field", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of route handlers in App Router?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To handle client-side routing", isCorrect: false },
            { label: "B", text: "To manage route configuration", isCorrect: false },
            { label: "C", text: "To create API endpoints with app/api/route.js", isCorrect: true },
            { label: "D", text: "To handle route validation", isCorrect: false }
        ]
    },
    {
        question: "How do you implement incremental static regeneration with dynamic params?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "Using getStaticPaths with revalidate", isCorrect: false },
            { label: "B", text: "Using generateStaticParams with revalidate", isCorrect: true },
            { label: "C", text: "Using dynamicParams with revalidate", isCorrect: false },
            { label: "D", text: "Using ISR config in next.config.js", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of next/headers?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To read/write HTTP headers in server components", isCorrect: true },
            { label: "B", text: "To style page headers", isCorrect: false },
            { label: "C", text: "To manage response headers", isCorrect: false },
            { label: "D", text: "To create header components", isCorrect: false }
        ]
    },
    {
        question: "How do you handle large datasets in Next.js?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "D",
        options: [
            { label: "A", text: "Using pagination only", isCorrect: false },
            { label: "B", text: "Using infinite scroll only", isCorrect: false },
            { label: "C", text: "Using streaming only", isCorrect: false },
            { label: "D", text: "Using pagination, infinite scroll, or streaming", isCorrect: true }
        ]
    },
    {
        question: "What is the purpose of next/dynamic?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To create dynamic routes", isCorrect: false },
            { label: "B", text: "To lazy load components", isCorrect: true },
            { label: "C", text: "To handle dynamic imports", isCorrect: false },
            { label: "D", text: "To optimize dynamic content", isCorrect: false }
        ]
    },
    {
        question: "How do you implement custom authentication middleware?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "Using API routes only", isCorrect: false },
            { label: "B", text: "Using getServerSideProps only", isCorrect: false },
            { label: "C", text: "Using Next.js middleware with auth logic", isCorrect: true },
            { label: "D", text: "Using next-auth middleware only", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of unstable_cache?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To cache data fetching functions", isCorrect: true },
            { label: "B", text: "To handle unstable data", isCorrect: false },
            { label: "C", text: "To create cache layers", isCorrect: false },
            { label: "D", text: "To optimize cache performance", isCorrect: false }
        ]
    },
    {
        question: "How do you implement feature flags in Next.js?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "D",
        options: [
            { label: "A", text: "Using environment variables only", isCorrect: false },
            { label: "B", text: "Using middleware only", isCorrect: false },
            { label: "C", text: "Using API routes only", isCorrect: false },
            { label: "D", text: "Using environment variables, middleware, or feature flag services", isCorrect: true }
        ]
    },
    {
        question: "What is the purpose of next/og?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To create organic growth tools", isCorrect: false },
            { label: "B", text: "To optimize Google rankings", isCorrect: false },
            { label: "C", text: "To generate Open Graph images dynamically", isCorrect: true },
            { label: "D", text: "To handle OG metadata", isCorrect: false }
        ]
    },
    {
        question: "How do you implement monitoring and analytics?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "D",
        options: [
            { label: "A", text: "Using next/analytics only", isCorrect: false },
            { label: "B", text: "Using third-party scripts only", isCorrect: false },
            { label: "C", text: "Using API routes only", isCorrect: false },
            { label: "D", text: "Using next/script, third-party tools, or custom solutions", isCorrect: true }
        ]
    },
    {
        question: "What is the purpose of route groups?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To group API routes", isCorrect: false },
            { label: "B", text: "To organize routes without affecting URL structure", isCorrect: true },
            { label: "C", text: "To create route categories", isCorrect: false },
            { label: "D", text: "To group route handlers", isCorrect: false }
        ]
    },
    {
        question: "How do you implement CDN integration?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "Using next.config.js assetPrefix or image loader", isCorrect: true },
            { label: "B", text: "Using CDN middleware", isCorrect: false },
            { label: "C", text: "Using next-cdn package", isCorrect: false },
            { label: "D", text: "Using Vercel only", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of useSearchParams in client components?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To set search parameters", isCorrect: false },
            { label: "B", text: "To navigate with query params", isCorrect: false },
            { label: "C", text: "To read current URL search parameters", isCorrect: true },
            { label: "D", text: "To manage search state", isCorrect: false }
        ]
    },
    {
        question: "How do you implement background jobs in Next.js?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "D",
        options: [
            { label: "A", text: "Using API routes only", isCorrect: false },
            { label: "B", text: "Using server actions only", isCorrect: false },
            { label: "C", text: "Using cron jobs only", isCorrect: false },
            { label: "D", text: "Using API routes, serverless functions, or external services", isCorrect: true }
        ]
    },
    {
        question: "What is the purpose of next/error?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To create custom error components", isCorrect: true },
            { label: "B", text: "To handle API errors", isCorrect: false },
            { label: "C", text: "To log errors", isCorrect: false },
            { label: "D", text: "To create error boundaries", isCorrect: false }
        ]
    },
    {
        question: "How do you implement health checks in Next.js?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "Using pages/health.js", isCorrect: false },
            { label: "B", text: "Using API route like app/api/health/route.js", isCorrect: true },
            { label: "C", text: "Using next.config.js health check", isCorrect: false },
            { label: "D", text: "Using middleware health checks", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of experimental features in next.config.js?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To enable unstable features", isCorrect: false },
            { label: "B", text: "To test beta functionality", isCorrect: false },
            { label: "C", text: "To opt-in to upcoming features before stable release", isCorrect: true },
            { label: "D", text: "To enable experimental mode", isCorrect: false }
        ]
    },
    {
        question: "How do you implement multi-zone Next.js setup?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "Using multiple Next.js apps with proxy configuration", isCorrect: true },
            { label: "B", text: "Using next.config.js zones", isCorrect: false },
            { label: "C", text: "Using middleware routing", isCorrect: false },
            { label: "D", text: "Using multiple next.config.js files", isCorrect: false }
        ]
    },

    // Expert Questions (81–100)
    {
        question: "What is the purpose of React's useOptimistic in server actions?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To optimize server performance", isCorrect: false },
            { label: "B", text: "To show optimistic UI during form submissions", isCorrect: true },
            { label: "C", text: "To handle optimistic rendering", isCorrect: false },
            { label: "D", text: "To create optimistic updates", isCorrect: false }
        ]
    },
    {
        question: "How do you implement distributed tracing in Next.js?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "D",
        options: [
            { label: "A", text: "Using next/instrumentation only", isCorrect: false },
            { label: "B", text: "Using OpenTelemetry only", isCorrect: false },
            { label: "C", text: "Using third-party APM only", isCorrect: false },
            { label: "D", text: "Using next/instrumentation, OpenTelemetry, or APM tools", isCorrect: true }
        ]
    },
    {
        question: "What is the purpose of next/font/google?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To self-host Google Fonts with performance benefits", isCorrect: true },
            { label: "B", text: "To use Google Fonts API", isCorrect: false },
            { label: "C", text: "To optimize font loading from Google", isCorrect: false },
            { label: "D", text: "To create Google Font components", isCorrect: false }
        ]
    },
    {
        question: "How do you implement circuit breakers in Next.js API routes?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "Using next.config.js circuitBreaker", isCorrect: false },
            { label: "B", text: "Using middleware circuit breakers", isCorrect: false },
            { label: "C", text: "Using libraries like opossum in API routes", isCorrect: true },
            { label: "D", text: "Using built-in circuit breaker", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of next/third-parties?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To create third-party components", isCorrect: false },
            { label: "B", text: "To optimize third-party script loading with best practices", isCorrect: true },
            { label: "C", text: "To handle third-party APIs", isCorrect: false },
            { label: "D", text: "To manage third-party integrations", isCorrect: false }
        ]
    },
    {
        question: "How do you implement canary releases in Next.js?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "D",
        options: [
            { label: "A", text: "Using feature flags only", isCorrect: false },
            { label: "B", text: "Using middleware routing only", isCorrect: false },
            { label: "C", text: "Using A/B testing only", isCorrect: false },
            { label: "D", text: "Using feature flags, middleware, or deployment strategies", isCorrect: true }
        ]
    },
    {
        question: "What is the purpose of next/after?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "C",
        options: [
            { label: "A", text: "To run code after response is sent", isCorrect: true },
            { label: "B", text: "To handle after effects", isCorrect: false },
            { label: "C", text: "To create post-response logic", isCorrect: false },
            { label: "D", text: "To optimize after render", isCorrect: false }
        ]
    },
    {
        question: "How do you implement distributed caching in Next.js?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "A",
        options: [
            { label: "A", text: "Using Redis/Memcached with unstable_cache", isCorrect: true },
            { label: "B", text: "Using next.config.js cache", isCorrect: false },
            { label: "C", text: "Using database caching only", isCorrect: false },
            { label: "D", text: "Using CDN caching only", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of next/experimental?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To enable experimental mode", isCorrect: false },
            { label: "B", text: "To access experimental React and Next.js features", isCorrect: true },
            { label: "C", text: "To create experimental components", isCorrect: false },
            { label: "D", text: "To test beta features", isCorrect: false }
        ]
    },
    {
        question: "How do you implement zero-downtime deployments?",
        topic: "nextjs",
        difficulty: "hard",
        correctAnswer: "D",
        options: [
            { label: "A", text: "Using Vercel only", isCorrect: false },
            { label: "B", text: "Using blue-green deployment only", isCorrect: false },
            { label: "C", text: "Using canary releases only", isCorrect: false },
            { label: "D", text: "Using Vercel, blue-green, or canary deployment strategies", isCorrect: true }
        ]
    }
];










